/**
 * IKom Media logo.
 *
 * ⚠️ PLACEHOLDER: the official logo file was not supplied, so this renders a plain text
 * wordmark rather than an approximation of the real mark.
 *
 * To use the official logo:
 *   1. Put the file in /public/brand/ (SVG preferred, e.g. /public/brand/ikom-media-logo.svg)
 *   2. Set LOGO.src below and its intrinsic width/height (keeps proportions, prevents layout shift)
 */
export const LOGO: { src: string | null; width: number; height: number } = {
  src: null,
  width: 160,
  height: 40,
};

type Props = { className?: string; height?: number };

export function Logo({ className = "", height = 32 }: Props) {
  if (LOGO.src) {
    const width = Math.round((LOGO.width / LOGO.height) * height);
    return (
      <img
        src={LOGO.src}
        alt="IKom Media"
        width={width}
        height={height}
        className={className}
        style={{ height, width: "auto" }}
        decoding="async"
        fetchPriority="high"
      />
    );
  }
  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold tracking-[-0.03em] text-white ${className}`}
      style={{ fontSize: height * 0.66, lineHeight: 1 }}
      data-placeholder="logo"
      title="Placeholder wordmark: replace with the official IKom Media logo"
    >
      IKom<span className="ml-[0.18em] font-semibold text-accent-text">Media</span>
    </span>
  );
}
