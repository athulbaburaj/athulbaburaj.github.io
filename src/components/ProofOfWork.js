// src/components/ProofOfWork.js
import { metrics, experience } from '../data/resumeData';

// Flattens the highlighted points out of every role, keeping the company and
// period alongside each so a line can stand on its own out of context.
const highlights = experience.flatMap(role =>
  role.points
    .filter(point => point.highlight)
    .map(point => ({ text: point.text, company: role.company, period: role.period }))
);

const ProofOfWork = () => (
  <section className="section-tight">
    {/* `flow` is required — without it the .kv and .autogrid container queries
        never fire and everything below stays single-column. */}
    <div className="w-full flow">

      <div className="mb-6">
        <p className="font-mono t-label tracking-[0.3em] text-muted uppercase mb-2">
          At Work
        </p>
        <h2 className="t-h2 font-bold text-primary leading-none">
          PROOF OF WORK.
        </h2>
      </div>

      {/* Figures first — they are the fastest thing on the page to read. */}
      <dl className="autogrid border-t border-hairline pt-6 mb-8">
        {metrics.map(metric => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="m-0">
              <span className="block t-h2 font-bold text-primary leading-none">
                {metric.value}
              </span>
              <span className="block font-mono t-label text-muted uppercase tracking-widest mt-2">
                {metric.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Then what those figures came from. */}
      <div className="flex flex-col">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="kv py-4 border-t border-hairline"
            style={{ '--label': '9rem' }}
          >
            <div className="font-mono t-label text-muted uppercase tracking-widest">
              {item.company}
            </div>
            <p className="text-secondary t-body leading-relaxed measure">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ProofOfWork;
