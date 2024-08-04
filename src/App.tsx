import { useEffect, useState } from "react";
import { ArwesProviders } from "./context/arwes-providers";
import { Background } from "./ui/background";
import { Frame } from "./ui/frame";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "./ui/arrow-right-icon";

export function App() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setInterval(() => setActive(!active), active ? 2_000 : 1_000);
    return () => clearTimeout(tid);
  }, [active]);
  return (
    <div className="w-screen h-screen bg-background">
      <ArwesProviders>
        <Background />
        <div className="flex h-full items-start">
          <Frame className="w-[30rem] h-full p-20">
            <div className="flex gap-8 flex-col">
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
          <Frame className="flex-1 h-full">
            <div className="flex gap-8 flex-col"></div>
          </Frame>
        </div>
      </ArwesProviders>
    </div>
  );
}
