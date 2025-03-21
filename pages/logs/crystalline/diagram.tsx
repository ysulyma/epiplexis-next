export default function Diagram() {
  return (
    <svg
      aria-label="Illustration of the Frobenius on Ainf"
      className="max-h-[100dvh] max-w-[100dvw] fill-black stroke-black dark:fill-white dark:stroke-white"
      role="img"
      strokeWidth="1.5"
      viewBox="50 50 250 250"
    >
      <defs>
        <radialGradient
          id="b"
          cx="50.001"
          cy="50.001"
          r="50.001"
          fx="50.001"
          fy="50.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity={1} stopColor="red" />
          <stop offset=".5" stopOpacity={1} stopColor="#fff" />
          <stop offset="1" stopOpacity={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="50.001"
          cy="50.001"
          r="50.001"
          fx="50.001"
          fy="50.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00f" stopOpacity={1} />
          <stop offset=".5" stopColor="#fff" stopOpacity={1} />
          <stop offset="1" stopOpacity={1} stopColor="#fff" />
        </radialGradient>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M321.774 292.342c0-8.35-6.768-15.118-15.118-15.118-8.35 0-15.118 6.769-15.118 15.118 0 8.35 6.768 15.118 15.118 15.118 8.35 0 15.118-6.768 15.118-15.118" />
        </clipPath>
        <clipPath id="c" clipPathUnits="userSpaceOnUse">
          <path d="M472.957 443.525c0-8.35-6.768-15.118-15.118-15.118-8.35 0-15.118 6.769-15.118 15.118 0 8.35 6.768 15.118 15.118 15.118 8.35 0 15.118-6.768 15.118-15.118" />
        </clipPath>
      </defs>
      <path
        d="M0 0v141.027"
        fill="none"
        strokeWidth={0.79701}
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <path
        d="M-1.554 2.072C-1.424 1.295 0 .13.389 0 0-.13-1.425-1.295-1.554-2.072"
        fill="none"
        strokeWidth={0.6376}
        transform="matrix(0 -1.33333 -1.33333 0 82.066 80.314)"
      />
      <path
        d="M0 0h141.027"
        fill="none"
        strokeWidth={0.79701}
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <path
        d="M-1.554 2.072C-1.424 1.295 0 .13.389 0 0-.13-1.425-1.295-1.554-2.072"
        fill="none"
        strokeWidth={0.6376}
        transform="matrix(1.33333 0 0 -1.33333 270.102 268.35)"
      />
      <path
        d="M0 141.734c78.279 0 141.734-63.455 141.734-141.734"
        fill="none"
        strokeWidth={0.3985}
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <path
        d="M306.656 235.649c10.437 0 18.898 50.764 18.898 113.387s-8.46 113.387-18.898 113.387c-10.437 0-18.898-50.764-18.898-113.387s8.46-113.387 18.898-113.387z"
        fill="none"
        stroke="#00f"
        strokeWidth={0.531333}
        transform="translate(-224.59 -175.175)"
      />
      <path
        d="M401.145 424.627c62.623 0 113.388 8.461 113.388 18.898s-50.765 18.898-113.388 18.898c-62.623 0-113.387-8.46-113.387-18.898 0-10.437 50.764-18.898 113.387-18.898z"
        fill="none"
        strokeWidth={0.531333}
        stroke="red"
        transform="translate(-224.59 -175.175)"
      />
      <g clipPath="url(#a)" transform="matrix(0 -1 -1 0 525.591 575.006)">
        <path
          d="M0 0h100v100H0Z"
          fill="url(#b)"
          stroke="none"
          transform="matrix(.60477 0 0 -.60477 276.417 322.581)"
        />
      </g>
      <path
        d="M11.339 113.387c0 6.262-5.077 11.339-11.339 11.339-6.262 0-11.339-5.077-11.339-11.339 0-6.262 5.077-11.338 11.339-11.338 6.262 0 11.339 5.076 11.339 11.338z"
        fill="none"
        strokeWidth={0.3985}
        stroke="#fff"
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <g clipPath="url(#c)" transform="matrix(0 -1 -1 0 525.591 575.006)">
        <path
          d="M0 0h100v100H0Z"
          fill="url(#d)"
          stroke="none"
          transform="matrix(.60477 0 0 -.60477 427.6 473.764)"
        />
      </g>
      <path
        d="M124.726 0c0 6.262-5.077 11.339-11.339 11.339-6.262 0-11.338-5.077-11.338-11.339 0-6.262 5.076-11.339 11.338-11.339S124.726-6.262 124.726 0z"
        fill="none"
        strokeWidth={0.3985}
        stroke="#fff"
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <path
        d="M2.835 0a2.835 2.835 0 1 1-5.67 0 2.835 2.835 0 0 1 5.67 0z"
        strokeWidth={0.3985}
        transform="matrix(1.33333 0 0 -1.33333 82.066 268.35)"
      />
      <path
        d="M381.938 312.287c22.976 13.265 42.073 32.36 55.03 54.806"
        fill="none"
        strokeWidth={0.531333}
        transform="translate(-224.59 -175.175)"
      />
      <path
        d="M434.323 366.775c.759-.285 2.53.385 2.845.665-.084-.413.222-2.282.847-2.797"
        fill="none"
        strokeWidth={0.426397}
        transform="translate(-224.59 -175.175)"
      />
      <path
        d="M1.699 1.7c-.047.128-.059.14-.059.198 0 .211.188.27.293.27.047 0 .27-.024.363-.258.035-.082.082-.41.352-1.816.094.011.164.011.328.011 1.652 0 3.187-1.558 3.187-3.129 0-.785-.386-1.382-1.136-1.382-1.442 0-2.04 1.933-2.637 3.879C1.312-.727.761-1.29.761-2.004c0-.281.223-1.371.82-2.063.082-.082.082-.105.082-.128 0-.036-.023-.094-.117-.094C1.265-4.29.503-2.848.503-1.9c0 .938.657 1.665 1.723 1.922zM3.069-.47c-.081 0-.105 0-.175-.012-.129 0-.14-.011-.14-.035 0-.023.175-.926.199-1.078.316-1.277 1.09-2.226 1.98-2.226.68 0 .95.527.95 1.007 0 1.125-1.278 2.344-2.813 2.344m0 0"
        aria-label="ϕ"
        stroke="none"
        transform="matrix(1.33333 0 0 1.33333 179.055 184.887)"
      />
    </svg>
  );
}
