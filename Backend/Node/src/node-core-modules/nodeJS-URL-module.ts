// https://api.example.com/users?page=2&limit=10  -> example url

function demoURL(): void {
  const apiURL = new URL(
    "https://api.acedevhub.com/users?page=2&limit=10&sort=latest",
  );
  console.log(
    apiURL.href,
    apiURL.protocol,
    apiURL.hostname,
    apiURL.pathname,
    apiURL.search,
  );
  /* 
    query parameter to get page here 
    key   = page 
    value = 2
  */
  const page = apiURL.searchParams.get("page");
  console.log(page);

  const limit = apiURL.searchParams.get("limit");
  console.log(limit);

  const sort = apiURL.searchParams.get("sort");
  console.log(sort);

  // to update page param
  apiURL.searchParams.set("page","10")
  console.log(apiURL.href)
  // https://api.acedevhub.com/users?page=10&limit=10&sort=latest - updated

  // URL SEARCH PARAMS -> VERY IMPORTANT
  const queryParams = new URLSearchParams({
    search: "vats",
    page: "1",
    limit: "5"
  })
  console.log(queryParams.toString())
  // output - search=vats&page=1&limit=5
}

demoURL();

/* 
https://api.acedevhub.com/users?page=2&limit=10&sort=latest -> full url href
https:                                   -> protocol
api.acedevhub.com                        -> hostname
/users                                   -> pathname
?page=2&limit=10&sort=latest             -> search
*/
