// Logo — a recreation of Luigi's chef-hat "L" mark from the Instagram avatar.
// Uses inline SVG so it scales, recolors, and ships fast (no extra HTTP).

type LogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
};

export default function Logo({ className = "", size = 56, withWordmark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        aria-label="Luigi's American Breakfast"
        className="shrink-0"
      >
        {/* Peach disc background */}
        <circle cx="60" cy="60" r="58" fill="var(--peach)" />
        <circle cx="60" cy="60" r="55" fill="none" stroke="var(--brick)" strokeOpacity="0.18" strokeWidth="1.5" />

        {/* Chef hat */}
        <g>
          <ellipse cx="60" cy="28" rx="22" ry="11" fill="#FBF1DC" stroke="var(--brick)" strokeOpacity="0.18" strokeWidth="1.2" />
          <ellipse cx="48" cy="22" rx="9" ry="8" fill="#FBF1DC" stroke="var(--brick)" strokeOpacity="0.18" strokeWidth="1.2" />
          <ellipse cx="72" cy="22" rx="9" ry="8" fill="#FBF1DC" stroke="var(--brick)" strokeOpacity="0.18" strokeWidth="1.2" />
          <ellipse cx="60" cy="18" rx="8" ry="7.5" fill="#FBF1DC" stroke="var(--brick)" strokeOpacity="0.18" strokeWidth="1.2" />
        </g>

        {/* The "L" — bold script-style */}
        <g>
          <path
            d="M52 33 C 52 33, 70 33, 70 38 C 70 50, 56 58, 56 78 C 56 86, 62 90, 74 90 C 80 90, 86 88, 88 86"
            stroke="var(--brick)"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* highlight stroke for depth */}
          <path
            d="M53 36 C 60 36, 66 38, 66 42"
            stroke="#F4C895"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </g>

        {/* Wordmark ribbon underneath */}
        <g>
          <text
            x="60"
            y="103"
            textAnchor="middle"
            fontFamily="Fraunces, Georgia, serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="13"
            fill="var(--brick)"
          >
            Luigi's
          </text>
        </g>
      </svg>

      {withWordmark && (
        <div className="leading-tight">
          <div className="font-display text-[18px] font-semibold text-ink">
            Luigi's
          </div>
          <div className="font-display italic text-[13px] text-brick -mt-0.5">
            American Breakfast
          </div>
        </div>
      )}
    </div>
  );
}
