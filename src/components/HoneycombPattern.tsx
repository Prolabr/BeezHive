const HoneycombPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="honeycomb"
            x="0"
            y="0"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5)"
          >
            <g fill="currentColor">
              <polygon points="28,0 56,16 56,48 28,64 0,48 0,16" />
              <polygon points="28,64 56,80 56,112 28,128 0,112 0,80" />
              <polygon points="84,32 112,48 112,80 84,96 56,80 56,48" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    </div>
  );
};

export default HoneycombPattern;
