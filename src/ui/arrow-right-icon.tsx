import { ComponentProps } from "react";

export function ArrowRightIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="1.25em"
      height="1.25em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 6L19 12L13 18" stroke="currentcolor" strokeWidth="1.5" />
      <path d="M5 6L11 12L5 18" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}
