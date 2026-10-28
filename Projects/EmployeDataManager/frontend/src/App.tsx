import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { apiHealth } from "./api/api";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const App = () => {
  // api test
  const [result, setResult] = useState("Checking...");
  useEffect(() => {
    async function checkApi() {
      const { result } = await apiHealth();
      setResult(result);
    }
    checkApi();
  }, []);

  // button logic
  function submitForm(formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username, password);
  }

  return (
    <div>
      <section>
        <form
          style={{ display: "flex", flexDirection: "column", width: "16rem" }}
          action={submitForm}
        >
          <input
            style={{ border: "2px solid black" }}
            type="text"
            name="username"
            placeholder="Enter username"
          />``

          <input
            style={{ border: "2px solid black" }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />

          <SubmitButton />
        </form>
      </section>

      <section>
        <div>API Status: {String(result)}</div>
      </section>
    </div>
  );
};

export default App;