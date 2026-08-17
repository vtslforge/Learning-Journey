import { useActionState } from "react";

const UseActionState_validation = () => {
  function handleLogin(_prevData: any, currentData: FormData) {
    const username = currentData.get("userName") as string;
    const password = currentData.get("passWord") as string;

    const regex = /^[A-Z0-9]+$/i;

    console.log(username, password);

    if (username.length > 8) {
      return { error: "Name should be less than 8 letters" };
    } else if (!regex.test(password)) {
      return { error: "Only alphabet and number allowed" };
    } else {
      return { message: "Success" };
    }
  }

  const [data, action, pending] = useActionState(handleLogin,undefined);

  console.log(data);

  return (
    <div className="p-30">
      <p>Validation Form</p>

      <form action={action}>
        <input
          className="border"
          name="userName"
          type="text"
          placeholder="enter username"
        />

        <br />

        <input
          className="border"
          name="passWord"
          type="text"
          placeholder="enter password"
        />

        <br />

        <button type="submit" className="border" disabled={pending}>
          Submit
        </button>

        {data?.error && <p>{data.error}</p>}
        {data?.message && <p>{data.message}</p>}
      </form>
    </div>
  );
};

export default UseActionState_validation;