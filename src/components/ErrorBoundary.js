// src/components/ErrorBoundary.js
import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-6">
                    <div className="max-w-md border-t border-hairline pt-8">
                        <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Runtime Error</p>
                        <h2 className="text-2xl font-bold text-primary mb-2">Something crashed.</h2>
                        <p className="text-secondary text-sm mb-6 measure">An unexpected error occurred. Refresh the page to continue.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-xs font-bold tracking-widest uppercase text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
