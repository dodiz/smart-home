import { ComponentPropsWithoutRef, ElementRef, useRef } from "react";
import {
  Animated,
  AnimatedProps,
  cx,
  fade,
  FrameSVGCorners,
  FrameSVGKranox,
  FrameSVGNefrex,
  FrameSVGOctagon,
  FrameSVGUnderline,
  useFrameSVGAssembler,
} from "@arwes/react";

const frames = {
  corners: FrameSVGCorners,
  kranox: FrameSVGKranox,
  nefrex: FrameSVGNefrex,
  octagon: FrameSVGOctagon,
  underline: FrameSVGUnderline,
} as const;

interface FrameProps<T extends keyof typeof frames> extends AnimatedProps {
  variant: T;
}

export function Frame<T extends keyof typeof frames>({
  animated,
  children,
  className,
  variant,
  ...props
}: FrameProps<T> & ComponentPropsWithoutRef<(typeof frames)[T]>) {
  const frameRef = useRef<ElementRef<"svg">>(null);
  const FrameSVG = frames[variant] || FrameSVGCorners;
  useFrameSVGAssembler(frameRef);
  return (
    <Animated
      as="div"
      animated={[fade(), ...(Array.isArray(animated) ? animated : [animated])]}
      className={cx("relative p-5 text-white", className)}
    >
      <FrameSVG
        elementRef={frameRef}
        className="text-primary [&_[data-name=bg]]:text-primary-bg/20"
        {...props}
      />
      <div className="relative">{children}</div>
    </Animated>
  );
}
