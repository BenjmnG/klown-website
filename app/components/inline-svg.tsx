export function InlineSVG() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="sr-only"
      x="0"
      y="0"
      height="60"
      width="60"
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="arrow-L" className="stroke">
        <path vector-effect="non-scaling-stroke" d="M45,0L15,30l30,30" />
      </g>
      <g id="arrow-R" className="stroke">
        <path vector-effect="non-scaling-stroke" d="M15,60,45,30,15,0" />
      </g>
      <g id="i-filter" className="stroke">
        <line x1="0" y1="22.6" x2="40.8" y2="22.6" />
        <line x1="0" y1="5.1" x2="40.8" y2="5.1" />
        <line x1="0" y1="40.2" x2="40.8" y2="40.2" />
        <circle fill="var(--bg)" cx="33.4" cy="5.1" r="5.1" />
        <circle fill="var(--bg)" cx="8.5" cy="22.6" r="5.1" />
        <circle fill="var(--bg)" cx="28.4" cy="40.2" r="5.1" />
      </g>
      <g id="i-reset" className="stroke">
        <path d="M38.1,8.1C30.5-1,16.9-2.2,7.7,5.4S-2.6,26.7,5,35.8s21.3,10.3,30.4,2.7c5.1-4.2,7.7-10.3,7.7-16.5" />
        <polyline points="29.8,8.5 39.1,9.3 39.9,0 " />
      </g>
      <g id="i-side" className="stroke">
        <line x1="0" y1="0.5" x2="25" y2="0.5" />
        <line x1="11" y1="17.6" x2="49.2" y2="17.6" />
        <line x1="0" y1="34.7" x2="25" y2="34.7" />
        <polyline points="42.3,10.7 49.2,17.6 42.3,24.5" />
      </g>
      <g id="i-down" className="stroke">
        <polyline points="43.2,23.9 27.1,39.9 11.1,23.9 " />
      </g>
    </svg>
  );
}
