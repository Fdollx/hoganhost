import "./Homepage.css";
import { useState } from "react";
import Form from "../../components/Form/Form";

function Homepage() {
  const [tuggle, setTuggle] = useState(0);

  const IncreaseState = () => {
    return setTuggle(tuggle + 1);
  };

  return (
    <>
      <p>{tuggle}</p>
      <button onClick={IncreaseState}> Increase State</button>
      <div className="homepage_hold"></div>
      <Form />
    </>
  );
}

export default Homepage;
