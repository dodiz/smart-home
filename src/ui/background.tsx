import {
  Animator,
  Dots,
  FrameSVG,
  FrameSVGSettings,
  useFrameSVGAssembler,
} from "@arwes/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { theme } from "../utils/theme";

export function Background() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const iid = setInterval(() => setActive((active) => !active), 1500);
    return () => clearInterval(iid);
  }, []);

  const frameRef = useRef<SVGSVGElement>(null);
  useFrameSVGAssembler(frameRef);
  const frameSettings = useMemo<FrameSVGSettings>(
    () => ({
      elements: [
        {
          name: "line",
          path: [
            ["M", 10, 10],
            ["h", "7%"],
            ["l", 10, 10],
            ["h", "7%"],
          ],
        },
        {
          name: "line",
          path: [
            ["M", "100%-10", 10],
            ["h", "-7%"],
            ["l", -10, 10],
            ["h", "-7%"],
          ],
        },
        {
          name: "line",
          path: [
            ["M", "100%-10", "100%-10"],
            ["h", "-7%"],
            ["l", -10, -10],
            ["h", "-7%"],
          ],
        },
        {
          name: "line",
          path: [
            ["M", "10", "100%-10"],
            ["h", "7%"],
            ["l", 10, -10],
            ["h", "7%"],
          ],
        },
      ],
    }),
    []
  );

  return (
    <>
      <FrameSVG
        fill="none"
        elementRef={frameRef}
        stroke={theme.colors.primary.DEFAULT}
        {...frameSettings}
      />
      <Animator active={active} duration={{ enter: 1, exit: 0.5 }}>
        <div className="absolute inset-0">
          <Dots
            color={theme.colors.primary.bg}
            distance={50}
            crossSize={2}
            origin="top"
            type="cross"
          />
        </div>
      </Animator>
    </>
  );
}
