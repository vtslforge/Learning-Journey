import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Processing..." : "Submit"}
    </button>
  );
}

const Form = () => {
  async function handleSubmit(formData: FormData) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(formData.get("username"));
    console.log(formData.get("password"));
  }

  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
      />

      <SubmitButton />
    </form>
  );
};

export default Form;