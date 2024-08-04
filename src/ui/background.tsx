import { Animator, Dots } from "@arwes/react";
import { useEffect, useState } from "react";
import { theme } from "../utils/theme";

export function Background() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const iid = setInterval(() => setActive((active) => !active), 2000);
    return () => clearInterval(iid);
  }, []);

  return (
    <Animator active={active} duration={{ enter: 2, exit: 2 }}>
      <div className="absolute inset-0">
        <Dots
          color={theme.colors.primary.DEFAULT}
          distance={50}
          size={1}
          origin={[0, 1]}
          originInverted
        />
      </div>
    </Animator>
  );
}
