import {
  AnimatorGeneralProvider,
  type AnimatorGeneralProviderSettings,
} from "@arwes/react";
import { PropsWithChildren } from "react";

import { type BleepsProviderSettings, BleepsProvider } from "@arwes/react";

const bleepsSettings: BleepsProviderSettings = {
  master: {
    volume: 0.9,
  },
  bleeps: {
    intro: {
      sources: [{ src: "/intro.mp3", type: "audio/mpeg" }],
    },
    click: {
      sources: [{ src: "/click.mp3", type: "audio/mpeg" }],
    },
  },
};

const animatorsSettings: AnimatorGeneralProviderSettings = {
  duration: {
    enter: 0.2,
    exit: 0.2,
    stagger: 0.04,
  },
};

export function ArwesProviders({ children }: PropsWithChildren) {
  return (
    <AnimatorGeneralProvider duration={animatorsSettings.duration}>
      <BleepsProvider {...bleepsSettings}>{children}</BleepsProvider>
    </AnimatorGeneralProvider>
  );
}
