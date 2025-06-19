import { useEffect } from "react";
import { googleApi } from "../utils/gapi";

export function Devices() {
  useEffect(() => {
    console.log("Devices");
    /*  googleApi.client
      .request({
        path: "https://nestservices.google.com/partnerconnections/dodi-nikki-home/auth",
      })
      .then(() => alert())
      .catch((reason) => alert(reason)); */
  }, []);
  return <div>Devices</div>;
}
