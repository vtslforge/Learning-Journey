// https://jsonplaceholder.typicode.com/users/1

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

// data transformation of external API
// this format is from API_URL
// remember if you don't know the data type then use unknown type else below is best method
type PlaceholderUser = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

// But we gonna make our own format
type publicUser = {
  id: number;
  name: string;
  email: string;
  company: string;
};
function transformData(rawData: PlaceholderUser): publicUser {
  return {
    id: rawData.id,
    name: rawData.name,
    email: rawData.email,
    company: rawData.company.name, // better
  };
}

// now we will the the api

async function fetchExternalApi(): Promise<void> {
  // AbortController() lets us to cancel an inprogress fetch request
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      signal: controller.signal, // here signal connect to AbortController() above
    });
    if (!response.ok) {
      console.error(`failed with ${response.status}`);
      return;
    }
    const rawUser = (await response.json()) as PlaceholderUser;
    const user = transformData(rawUser);
    console.log(user); // printing transformaed user data from api
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("request failed because api took too long");
      return;
    }
    const message = error instanceof Error ? error.message : "unknown error";
    console.error(message);
  } finally {
    clearTimeout(timer);
  }
}
fetchExternalApi()