"use client";

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedGrid() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "polygon",
      { pathLength: 1 },
      { delay: stagger(0.1, { startDelay: 1 }), duration: 0.4 }
    );
  }, []);

  return (
    <svg
      viewBox="0 0 1600 718"
      version="1.1"
      width="1600"
      style={{
        maskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
      }}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Large"
          transform="translate(0, -362)"
          stroke="#FF0000"
          strokeWidth="2"
        >
          <g id="Group" transform="translate(-17, 363)" ref={scope}>
            <polygon
              pathLength={0}
              id="Rectangle"
              points="551.969704 -5.68434189e-14 657.968315 -5.68434189e-14 547.574374 239 367.979803 239"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy"
              points="657.968315 -5.68434189e-14 763.966925 -5.68434189e-14 727.168945 239 547.574374 239"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-2"
              points="763.966925 -5.68434189e-14 869.965536 -5.68434189e-14 906.763516 239 727.168945 239"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-3"
              points="869.965536 -5.68434189e-14 975.964146 -5.68434189e-14 1086.35809 239 906.763516 239"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-12"
              points="975.964146 -5.68434189e-14 1081.96276 -5.68434189e-14 1265.95266 239 1086.35809 239"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-4"
              points="906.763516 239 1086.35809 239 1196.75203 478 943.561496 478"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-13"
              points="1086.35809 239 1265.95266 239 1449.94256 478 1196.75203 478"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-8"
              points="943.561496 478 1196.75203 478 1307.14597 717 980.359477 717"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-14"
              points="1196.75203 478 1449.94256 478 1633.93246 717 1307.14597 717"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-5"
              points="727.168945 239 906.763516 239 943.561496 478 690.370965 478"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-9"
              points="690.370965 478 943.561496 478 980.359477 717 653.572984 717"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-6"
              points="547.574374 239 727.168945 239 690.370965 478 437.180433 478"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-10"
              points="437.180433 478 690.370965 478 653.572984 717 326.786492 717"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-7"
              points="367.979803 239 547.574374 239 437.180433 478 183.989901 478"
            ></polygon>
            <polygon
              pathLength={0}
              id="Rectangle-Copy-11"
              points="183.989901 478 437.180433 478 326.786492 717 2.84842392e-14 717"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}
