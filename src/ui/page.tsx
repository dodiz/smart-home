import {
  createThemeUnit,
  createThemeMultiplier,
  createThemeColor,
  Animator,
  Animated,
  transition,
  flicker,
  styleFrameClipOctagon,
  Illuminator,
} from "@arwes/react";
import { Button } from "./button";
import { Frame } from "./frame";

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

addStyles(`
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

export const Page = () => {
  return (
    <Animator combine manager="stagger">
      <Animated
        as="main"
        className="relative flex flex-col items-center mx-auto gap-4 p-5 w-full max-w-[55rem]"
        animated={transition("scale", 0.8, 1)}
      >
        <Frame variant="nefrex">
          <div
            className="main-frame"
            style={{
              clipPath: styleFrameClipOctagon({
                leftBottom: false,
                rightTop: false,
              }),
            }}
          >
            <div className="main-frame-bg" />
            <Illuminator color={theme.colors.primary(7, { alpha: 1 })} />
          </div>
          <Animator duration={{ offset: 0.8 }}>
            <Animated as="h1" animated={[flicker(), transition("y", 20, 0, 0)]}>
              Futuristic Sci-Fi UI Web Framework
            </Animated>
          </Animator>
          <Animator>
            <Animated
              className="relative w-1/2 h-0.5"
              animated={[flicker(), transition("y", 20, 1, 0)]}
            />
          </Animator>
          <Animator>
            <Animated as="p" animated={[flicker(), transition("y", 20, 0, 0)]}>
              Arwes is a web framework to build user interfaces based on
              futuristic science fiction designs, animations, and sound effects.
            </Animated>
          </Animator>
          <Animator>
            <Animated
              className="flex items-center gap-4 justify-center mt-8"
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
        </Frame>
      </Animated>
    </Animator>
  );
};
