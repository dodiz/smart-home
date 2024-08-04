import { useRef } from "react";
import {
  Animated,
  AnimatedProps,
  cx,
  fade,
  FrameSVGCorners,
  useFrameSVGAssembler,
} from "@arwes/react";

export function Frame({ animated, children, className }: AnimatedProps) {
  const frameRef = useRef<SVGSVGElement | null>(null);
  useFrameSVGAssembler(frameRef);
  return (
    <Animated
      as="div"
      animated={[fade(), ...(Array.isArray(animated) ? animated : [animated])]}
      className={cx("relative p-5 text-white", className)}
    >
      <FrameSVGCorners
        elementRef={frameRef}
        className="text-primary [&_[data-name=bg]]:text-primary-bg/20"
        padding={4}
      />
      <div className="relative">{children}</div>
    </Animated>
  );
}
