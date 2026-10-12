import { INDUSTRIES } from "../../data/content";
import { Reveal } from "../Reveal";

export function IndustriesGrid() {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line xs:grid-cols-2 lg:grid-cols-4">
      {INDUSTRIES.map((ind, i) => {
        const Icon = ind.icon;
        return (
          <Reveal
            as="li"
            key={ind.name}
            delay={(i % 4) * 60}
            className="group flex items-center gap-4 bg-navy-950 p-6 transition-colors duration-300 hover:bg-navy-900 lg:flex-col lg:items-start lg:p-7"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-line-strong text-accent-text transition-colors group-hover:border-bright group-hover:text-white">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-semibold text-white lg:text-lg">{ind.name}</span>
          </Reveal>
        );
      })}
    </ul>
  );
}
