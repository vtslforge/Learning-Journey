import React from 'react'

const Builder = () => {

  // function one
  function fnc1() {
    const carName = "bmw"
    const carName2 = "yamaha"
    return { carName, carName2 }
  }

  const data = fnc1()

  // function two
  function fnc2(prop: any) {
    // or - function fnc2(prop: { carName2: string }) {
    console.log(prop.carName2)
  }

  fnc2({ carName2: data.carName2 })
  const data2 = fnc1()

  return (
    <div>
      <p>{data.carName}</p>
      <p>{data2.carName2}</p>
    </div>
  )
}

// export default Builder

const Builder2 = () => {
  // function one
  function fnc1() {
    const carName = "bmw";
    const carName2 = "yamaha";

    return { carName, carName2 };
  }

  const data = fnc1();

  // function two (changing value)
  function fnc2(prop:any) {
    // or  - function fnc2(prop: { carName2: string }) {
    prop.carName2 = "honda"; // changing it
  }

  fnc2(data); // pass whole object

  return (
    <div>
      <p>{data.carName}</p>
      <p>{data.carName2}</p>
    </div>
  );
};

export default Builder;
export default Builder2;