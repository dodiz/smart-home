async function start() {
  gapi.client.init({
    apiKey: "AIzaSyC5tu7rLql14GoLF-8e0OosRSc_vONcpok",
    clientId:
      "772834547205-bh7reqlqq3aglv728pv6kpmignum14ub.apps.googleusercontent.com",
    scope: "profile",
    discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
  });
}
gapi.load("client", start);

export const googleApi = gapi;
