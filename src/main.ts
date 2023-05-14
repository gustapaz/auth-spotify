import { getAccessToken } from "./functions/getAccessToken";
import { redirectToAuthCodeFlow } from "./functions/redirectToAuthCodeFlow";
import { fetchProfile } from "./functions/fetchProfile";
import { populateUI } from "./functions/populateUI";

const clientId = "8005e132a19e43e896026cd03c22dc54";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}


