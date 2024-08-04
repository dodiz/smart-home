import { useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import {
  createThemeUnit,
  createThemeMultiplier,
  createThemeColor,
  styleSteps,
  Animator,
  Animated,
  transition,
  flicker,
  Dots,
  styleFrameClipOctagon,
  useFrameSVGAssembler,
  FrameSVG,
  FrameSVGNefrex,
  Illuminator,
  FrameSVGSettings,
} from "@arwes/react";
import { Button } from "./button";

const addStyles = (css: string) => {
  const style = document.createElement("style");
  style.innerHTML = css;
  document.body.appendChild(style);
};

const theme = {
  // REMs as HTML unit.
  space: createThemeUnit((index) => `${index * 0.25}rem`),

  // Pixels as number unit.
  spacen: createThemeMultiplier((index) => index * 4),

  colors: {
    background: "hsla(180, 100%, 3%)",
    primary: createThemeColor((i) => [180, 100, 100 - i * 10]),
    secondary: createThemeColor((i) => [60, 100, 100 - i * 10]),
  },

  fontFamily: "Tomorrow",
};

const PageFrame = (): ReactElement => {
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
    <FrameSVG elementRef={frameRef} className="page-frame" {...frameSettings} />
  );
};
addStyles(`
  .page-frame [data-name=line] {
    stroke: ${theme.colors.primary(5)};
    stroke-width: 1;
    fill: none;
  }
`);

const MainFrame = (): ReactElement => {
  const svgRef = useRef<SVGSVGElement>(null);
  useFrameSVGAssembler(svgRef);
  return (
    <div
      className="main-frame"
      style={{
        clipPath: styleFrameClipOctagon({ leftBottom: false, rightTop: false }),
      }}
    >
      <div className="main-frame-bg" />
      <FrameSVGNefrex elementRef={svgRef} />
      <Illuminator color={theme.colors.primary(7, { alpha: 1 })} />
    </div>
  );
};
addStyles(`
  .main-frame {
    position: absolute;
    inset: 0;
  }
  .main-frame [data-name=bg] {
    color: ${theme.colors.primary(3, { alpha: 0.05 })};
  }
  .main-frame [data-name=line] {
    color: ${theme.colors.primary(5)};
  }
  .main-frame-bg {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(-45deg, ${theme.colors.primary(3, {
      alpha: 0.01,
    })}, ${theme.colors.primary(3, {
  alpha: 0.01,
})} 5px, transparent 5px, transparent 10px);
  }
`);

export const Page = (): ReactElement => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setInterval(() => setActive(!active), active ? 5_000 : 1_000);
    return () => clearTimeout(tid);
  }, [active]);

  return (
    <Animator active={active}>
      <div className="page">
        <Dots
          className="background"
          color={theme.colors.primary(2, { alpha: 0.05 })}
          distance={30}
          type="cross"
          crossSize={1}
          size={6}
          originInverted
        />
        <PageFrame />
        <Animator combine manager="stagger">
          <Animated
            as="main"
            className="relative flex flex-col items-center mx-auto gap-4 p-5 w-full max-w-[55rem]"
            animated={transition("scale", 0.8, 1)}
          >
            <MainFrame />
            <Animator merge duration={{ delay: 0.6, enter: 0.5 }}></Animator>

            <Animator>
              <Animated<HTMLImageElement>
                as="img"
                src="/assets/images/logotype.svg"
                animated={[
                  flicker(),
                  {
                    transitions: {
                      entering: { y: [100, 0], delay: 0.6, duration: 0.2 },
                    },
                  },
                ]}
              />
            </Animator>

            <Animator duration={{ offset: 0.8 }}>
              <Animated
                as="h1"
                animated={[flicker(), transition("y", 20, 0, 0)]}
              >
                Futuristic Sci-Fi UI Web Framework
              </Animated>
            </Animator>

            <Animator>
              <Animated
                className="relative w-1/2 h-0.5"
                style={{
                  background: styleSteps(20, "currentcolor", "-45deg"),
                }}
                animated={[flicker(), transition("y", 20, 1, 0)]}
              />
            </Animator>

            <Animator>
              <Animated
                as="p"
                animated={[flicker(), transition("y", 20, 0, 0)]}
              >
                Arwes is a web framework to build user interfaces based on
                futuristic science fiction designs, animations, and sound
                effects.
              </Animated>
            </Animator>
            <Animator>
              <Animated
                className="page-buttons"
                animated={transition("y", 20, 0, 0)}
              >
                <Button animated={[flicker(), transition("x", 10, 0, 0)]}>
                  Exit
                </Button>
                <Button animated={[flicker(), transition("x", -10, 0, 0)]}>
                  Enter
                </Button>
              </Animated>
            </Animator>

            <Animator>
              <Animated
                className="page-header"
                animated={[flicker(), transition("x", -10, 0, 0)]}
              >
                Arwes Demo Project |
              </Animated>
              <Animated
                className="page-footer"
                animated={[flicker(), transition("x", 10, 0, 0)]}
              >
                | Futuristic Sci-Fi UI Web Framework
              </Animated>
            </Animator>
          </Animated>
        </Animator>
      </div>
    </Animator>
  );
};
addStyles(`
  .page-header,
  .page-footer {
    position: absolute;
    font-size: 0.625rem;
    color: ${theme.colors.primary(9)};
  }
  .page-header {
    right: 4px;
    top: 4px;
  }
  .page-footer {
    left: 4px;
    bottom: 4px;
  }
`);
