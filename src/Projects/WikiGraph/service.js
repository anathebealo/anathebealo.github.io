const BASE_URL = "https://en.wikipedia.org/w/api.php?";

export const queryLinksOfPage = async ({ pageTitle }) => {
  const url = BASE_URL +
    new URLSearchParams({
        origin: "*",
        action: "parse",
        page: pageTitle,
        format: "json",
        prop: "links"
    });

  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}

export const getPageDetails = async ({ pageTitle }) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`;

  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}

export const getRelatedPages = async ({ pageTitle }) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/related/${pageTitle}`;

  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}

export const getRandomPage = async () => {
  const url = "https://en.wikipedia.org/api/rest_v1/page/random/summary";

  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}