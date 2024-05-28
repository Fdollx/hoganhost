import { useState } from "react";

const Form = () => {
  // state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Handler for input changes, this function update the value of the specific input was changed
  const handlechange = (e) => {
    //grabbing even from the inputs
    const { name, value } = e.target;

    //updating react useState value
    setFormData({
      ...formData,
      //updating the useState value
      [name]: value,
    });
  };

  //Handler for form submission
  const HandleSubmit = (e) => {
    //prevents webpage from refreshing
    e.preventDefault();
    console.log("Form data submitted:", formData);

    //add form submission logic here (e.g send data to an API)
  };

  // function Form() {
  //   function HandleSubmit(data) {
  //     return "datas";
  //   }

  //   function valueChange() {}

  return (
    <>
      <h4>Sign Up</h4>
      <form onSubmit={HandleSubmit}>
        <div>
          <label for="email">Email</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handlechange}
          />
        </div>
        <div>
          <label for="Name">Name</label>
          <br />
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={handlechange}
          />
        </div>
        <div>
          <label for="Password">Password</label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.passowrd}
            onChange={handlechange}
          />
        </div>
        <div>
          <label for="message">
            message
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handlechange}
            ></textarea>
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Form;
