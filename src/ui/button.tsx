import { useRef, ComponentProps } from "react";
import {
  Animated,
  AnimatedProp,
  useFrameSVGAssembler,
  fade,
  FrameSVGOctagon,
  useBleeps,
  cx,
} from "@arwes/react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "secondary";
  variant?: "fill" | "outline";
  animated?: AnimatedProp;
}
export const Button = ({
  children,
  color = "primary",
  variant = "fill",
  animated,
  className,
  onClick,
}: ButtonProps) => {
  const bleeps = useBleeps<"click">();
  const frameRef = useRef<SVGSVGElement>(null);

  useFrameSVGAssembler(frameRef);

  return (
    <Animated<HTMLButtonElement>
      as="button"
      className={cx(
        "button relative uppercase group outline-none py-4 px-12 tracking-widest leading-8",
        color === "primary"
          ? "text-primary [&_[data-name=bg]]:text-primary-bg"
          : "text-secondary [&_[data-name=line]]:text-secondary [&_[data-name=bg]]:text-secondary-bg hover:text-secondary-hover",
        variant === "outline" && "[&_[data-name=bg]]:hidden"
      )}
      animated={[fade(), ...(Array.isArray(animated) ? animated : [animated])]}
      onClick={(event) => {
        bleeps.click?.play();
        onClick?.(event);
      }}
    >
      <FrameSVGOctagon
        elementRef={frameRef}
        squareSize={8}
        className={cx(
          "group-hover:scale-105 group-focus:scale-105 transition-all",
          color === "primary"
            ? "text-primary [&_[data-name=bg]]:text-primary-bg group-hover:text-primary-hover group-hover:[&_[data-name=bg]]:text-primary-bg-hover group-hover:[&_[data-name=line]]:text-primary-hover group-focus:text-primary-hover group-focus:[&_[data-name=bg]]:text-primary-bg-hover group-focus:[&_[data-name=line]]:text-primary-hover"
            : "text-secondary [&_[data-name=line]]:text-secondary [&_[data-name=bg]]:text-secondary-bg group-hover:text-secondary-hover group-hover:[&_[data-name=bg]]:text-secondary-bg-hover group-hover:[&_[data-name=line]]:text-secondary-hover group-focus:text-secondary-hover group-focus:[&_[data-name=bg]]:text-secondary-bg-hover group-focus:[&_[data-name=line]]:text-secondary-hover"
        )}
      />
      <div className={cx("relative", className)}>{children}</div>
    </Animated>
  );
};
