import { useEffect, useState } from "react";
import { ArwesProviders } from "./context/arwes-providers";
import { Background } from "./ui/background";
import { Frame } from "./ui/frame";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "./ui/arrow-right-icon";
import { Devices } from "./components/devices";
import { Page } from "./ui/page";

export function App() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setInterval(() => setActive(!active), active ? 2_000 : 1_000);
    return () => clearTimeout(tid);
  }, [active]);
  return (
    <div className="w-screen h-screen bg-background p-9">
      <ArwesProviders>
        <Background />
        <div className="flex h-full gap-2 items-start">
          <Frame variant="octagon" className="w-[30rem] h-full">
            <div className="flex gap-4 flex-col p-4">
              <Button color="primary" className="flex justify-between">
                Nikki <ArrowRightIcon />
              </Button>
              <Button className="flex justify-between">
                Dodi <ArrowRightIcon />
              </Button>
              <Button color="secondary" className="flex justify-between">
                Chandler <ArrowRightIcon />
              </Button>
              <Button color="secondary" className="flex justify-between">
                Arya <ArrowRightIcon />
              </Button>
            </div>
          </Frame>
          <Frame variant="underline" className="flex-1 h-full">
            <Devices />
            <Page />
          </Frame>
        </div>
      </ArwesProviders>
    </div>
  );
}
