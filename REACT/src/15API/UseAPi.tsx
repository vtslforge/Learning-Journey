import { Suspense, use } from "react";

const userPromise = fetch("https://dummyjson.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Unable to fetch");
    }
    return res.json();
  });

const UseAPi = () => {
  const data = use(userPromise);

  return (
    <>
      <div>UseAPi</div>

      <div>
        {data.users.map((item:any) => (
          <p key={item.id}>{item.firstName}</p>
        ))}
      </div>
    </>
  );
};

const App = () => {
  return (
    <Suspense fallback={<p>Loading bro wait ..</p>}>
      <UseAPi />
    </Suspense>
  );
};

export default App;