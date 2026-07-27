// src/components/Timeline.js
import { experience, education } from '../data/resumeData';

// Derived from the existing arrays rather than duplicated, so it cannot drift.
// Only the degree is taken from `education` — school entries do not belong on a
// professional timeline, and including them would make the span look padded.
const entries = [
  ...experience.map(role => ({
    period: role.period,
    title: role.role,
    org: role.company,
    kind: 'Role'
  })),
  ...education.slice(0, 1).map(item => ({
    period: item.period,
    title: item.degree,
    org: item.institution,
    kind: 'Education'
  }))
];

const Timeline = () => (
  <section className="section-tight">
    {/* `flow` is required for the .kv container queries below */}
    <div className="w-full flow">

      <div className="mb-6">
        <p className="font-mono t-label tracking-[0.3em] text-muted uppercase mb-2">
          2019 — Present
        </p>
        <h2 className="t-h2 font-bold text-primary leading-none">
          WHERE I'VE WORKED.
        </h2>
      </div>

      <ol className="flex flex-col list-none p-0 m-0">
        {entries.map((entry, index) => (
          <li
            key={index}
            className="kv py-4 border-t border-hairline"
            style={{ '--label': '11rem' }}
          >
            <div className="font-mono t-label text-muted uppercase tracking-widest">
              {entry.period}
            </div>
            <div>
              <div className="t-body font-bold text-primary leading-snug">
                {entry.title}
              </div>
              <div className="t-small text-secondary mt-0.5">
                {entry.org}
              </div>
            </div>
          </li>
        ))}
      </ol>

    </div>
  </section>
);

export default Timeline;
