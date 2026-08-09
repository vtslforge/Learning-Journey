import { useActionState } from "react";

const ActionState = () => {
  const handleForm = (_prevData: any, formData: any) => {
    let name = formData.get("uname");
    let password = formData.get("upass");
    // console.log("form sumbit" + name, password);
    // we can do validation using useActionState here
    if (name && password) {
      return { message: "data sumbitted",name, password };
    } else {
      return { error: "something went wrong enter proper data",name, password };
    }
  };
  const [data, action, pending] = useActionState(handleForm,undefined);
  console.log(data);
  return (
    <div>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="enter username" name="uname" />
        <br />
        <input defaultValue={data?.password} type="password" placeholder="enter your password" name="upass" />
        <button disabled={pending} type="submit">
          sumbit data
        </button>
        {
          data?.error && <span> something went wrong</span> // Optional chaining: safely checks if data exists before accessing message
        }
        {
          data?.message && <span> {data?.message}</span>
          // If data exists → get message
          // If data is null/undefined → return undefined
          // ?. = optional chaining, safely accesses a property if the object exists
        }
      </form>
      <p>name: {data?.name}</p>
      <p>password: {data?.password}</p>
    </div>
  );
};

export default ActionState;
