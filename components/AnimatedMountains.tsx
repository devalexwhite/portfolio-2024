"use client";

import { useAnimate, stagger, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedMountains() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "line",
      { pathLength: 1 },
      { delay: stagger(0.1, { startDelay: 1 }), duration: 0.4 }
    );
  }, []);

  return (
    <svg width="1600px" viewBox="0 0 1600 347.414214">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="square"
      >
        <g id="Large" transform="translate(0, -16.7929)" stroke="#979797">
          <g id="Group-2" transform="translate(-0.5, 17)" ref={scope}>
            <line
              pathLength={0}
              x1="1493.5"
              y1="187"
              x2="1652.5"
              y2="346"
              id="Line-9"
            ></line>
            <line
              pathLength={0}
              x1="1392.5"
              y1="287"
              x2="1493.5"
              y2="187"
              id="Line-8"
            ></line>
            <line
              pathLength={0}
              x1="1233.5"
              y1="130"
              x2="1449.5"
              y2="346"
              id="Line-7"
            ></line>
            <line
              pathLength={0}
              x1="1142.5"
              y1="214"
              x2="1233.5"
              y2="130"
              id="Line-6"
            ></line>
            <line
              pathLength={0}
              x1="1010.5"
              y1="82"
              x2="1274.5"
              y2="346"
              id="Line-5"
            ></line>
            <line
              pathLength={0}
              x1="747"
              y1="346.5"
              x2="1011"
              y2="82.5"
              id="Line-4"
            ></line>
            <line
              pathLength={0}
              x1="574"
              y1="0.5"
              x2="833"
              y2="259.5"
              id="Line-3"
            ></line>
            <line
              pathLength={0}
              x1="381"
              y1="190.5"
              x2="574"
              y2="0.5"
              id="Line"
            ></line>
            <line
              pathLength={0}
              x1="269"
              y1="77.5"
              x2="535"
              y2="346.5"
              id="Line-2"
            ></line>
            <line
              pathLength={0}
              x1="1.28326169e-14"
              y1="346.5"
              x2="269"
              y2="77.5"
              id="Line"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
}
