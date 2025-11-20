// src/utils/GameEngine.js

export const SCENARIOS = [
    {
        id: 'ecom-flash-sale',
        title: 'OPERATION: FLASH_SALE',
        description: 'Client expects 100x traffic spike for 1 hour. System must maintain <200ms latency and 99.99% uptime.',
        budget: 5000,
        requirements: {
            minCapacity: 10000, // RPS
            minReliability: 0.999,
            maxLatency: 200, // ms
            consistency: 'strong', // New Requirement
        },
        constraints: [
            'Budget is strict.',
            'Data consistency is critical for inventory.'
        ]
    },
    {
        id: 'video-streaming',
        title: 'OPERATION: STREAM_CORE',
        description: 'Global video streaming service launch. High bandwidth required. Low latency is less critical than throughput.',
        budget: 8000,
        requirements: {
            minCapacity: 5000, // Mbps throughput equivalent
            minReliability: 0.99,
            maxLatency: 500,
            consistency: 'eventual',
        },
        constraints: [
            'Global availability required.',
            'Storage costs must be optimized.'
        ]
    },
    {
        id: 'finance-ledger',
        title: 'OPERATION: IRON_LEDGER',
        description: 'Banking transaction ledger. Zero data loss tolerated. Speed is secondary to absolute consistency and security.',
        budget: 10000,
        requirements: {
            minCapacity: 1000, // RPS
            minReliability: 0.99999,
            maxLatency: 1000,
            consistency: 'strong',
        },
        constraints: [
            'ACID compliance mandatory.',
            'Multi-region redundancy required.'
        ]
    }
];

export const COMPONENTS = [
    {
        id: 'lb-nginx',
        name: 'Nginx Load Balancer',
        type: 'Load Balancer',
        cost: 200,
        stats: { capacity: 2000, reliability: 0.99, latency: 5, consistency: 'neutral' }
    },
    {
        id: 'lb-aws-alb',
        name: 'AWS ALB',
        type: 'Load Balancer',
        cost: 800,
        stats: { capacity: 10000, reliability: 0.9999, latency: 10, consistency: 'neutral' }
    },
    {
        id: 'db-sql',
        name: 'PostgreSQL (Single)',
        type: 'Database',
        cost: 500,
        stats: { capacity: 1000, reliability: 0.99, latency: 50, consistency: 'strong' }
    },
    {
        id: 'db-sql-cluster',
        name: 'PostgreSQL (Cluster)',
        type: 'Database',
        cost: 2000,
        stats: { capacity: 8000, reliability: 0.9999, latency: 20, consistency: 'strong' }
    },
    {
        id: 'db-nosql',
        name: 'DynamoDB',
        type: 'Database',
        cost: 1500,
        stats: { capacity: 20000, reliability: 0.99999, latency: 10, consistency: 'eventual' }
    },
    {
        id: 'cache-redis',
        name: 'Redis Cache',
        type: 'Cache',
        cost: 600,
        stats: { capacity: 15000, reliability: 0.99, latency: 1, consistency: 'eventual' }
    },
    {
        id: 'cdn-cloudflare',
        name: 'Cloudflare CDN',
        type: 'CDN',
        cost: 1000,
        stats: { capacity: 50000, reliability: 0.999, latency: -50, consistency: 'eventual' }
    },
    {
        id: 'server-t2',
        name: 'T2 Micro Instances',
        type: 'Compute',
        cost: 100,
        stats: { capacity: 100, reliability: 0.95, latency: 100, consistency: 'neutral' }
    },
    {
        id: 'server-k8s',
        name: 'K8s Cluster',
        type: 'Compute',
        cost: 2500,
        stats: { capacity: 10000, reliability: 0.999, latency: 20, consistency: 'neutral' }
    }
];

export const calculateResult = (scenario, selectedComponentIds) => {
    const selected = COMPONENTS.filter(c => selectedComponentIds.includes(c.id));

    let totalCost = 0;
    let totalCapacity = 0;
    let totalReliability = 1;
    let baseLatency = 200; // Baseline system latency
    let latencyImprovement = 0;
    let hasConsistencyViolation = false;

    selected.forEach(comp => {
        totalCost += comp.cost;
        totalCapacity += comp.stats.capacity;
        totalReliability *= comp.stats.reliability;

        if (comp.stats.latency < 0) {
            latencyImprovement += Math.abs(comp.stats.latency);
        } else {
            baseLatency = (baseLatency + comp.stats.latency) / 2;
        }

        // Check Consistency
        if (scenario.requirements.consistency === 'strong' && comp.stats.consistency === 'eventual') {
            hasConsistencyViolation = true;
        }
    });

    const finalLatency = Math.max(1, baseLatency - latencyImprovement);

    // Check Constraints
    const costPass = totalCost <= scenario.budget;
    const capacityPass = totalCapacity >= scenario.requirements.minCapacity;
    const reliabilityPass = totalReliability >= scenario.requirements.minReliability;
    const latencyPass = finalLatency <= scenario.requirements.maxLatency;
    const consistencyPass = !hasConsistencyViolation;

    const success = costPass && capacityPass && reliabilityPass && latencyPass && consistencyPass;

    let message = "ARCHITECTURE_APPROVED";
    if (!success) {
        if (!consistencyPass) message = "DATA_INCONSISTENCY_DETECTED";
        else if (!costPass) message = "BUDGET_EXCEEDED";
        else if (!capacityPass) message = "SYSTEM_OVERLOAD";
        else if (!reliabilityPass) message = "UNSTABLE_BUILD";
        else if (!latencyPass) message = "LATENCY_TOO_HIGH";
    }

    return {
        success,
        message,
        stats: {
            cost: totalCost,
            capacity: totalCapacity,
            reliability: totalReliability.toFixed(4),
            latency: finalLatency.toFixed(0)
        }
    };
};
