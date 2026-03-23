import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const [result, setResult] = useState(null);
  const onSubmit = (data) => console.log(data);
  // api form companyDB
  const handleapi = async () => {
    const response = await fetch("http://localhost:3001/api/data");
    const data = await response.json();
    setResult(data);
    console.log(data);
  };

  return (
    <div className="text-white">
      <button onClick={handleapi}>tap</button>
      {result?.departments?.map((dept, index) => (
        <p key={index}>{dept.name}</p>
      ))}
      {/* handling form */}
      <div className="text-white  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-white"
            defaultValue="test"
            {...register("example")}
          />
          <input
            className="border border-white"
            {...register("exampleRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />

        </form>
        <p>{}</p>
      </div>
    </div>
  );
};

export default App;
