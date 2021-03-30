import React, { Dispatch, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Modal from "../Modal/Modal";
import "./Form.scss";

interface iProps {
  firstName: string,
  setFirstName: Dispatch<any>,
  secondName: string,
  setSecondName: Dispatch<any>,
};

function Form( {firstName, setFirstName, secondName, setSecondName}: iProps) {

  const history = useHistory();
  const [ portalShown, setPortalShown ] = useState(false)
  useEffect(() => {
    setFirstName("")
    setSecondName("")
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history.push("/thanks");
  };
  const handleCancel= () => {
    setPortalShown(true)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

      <div className="container">
        <div>
          <label htmlFor="email">First Name</label>
          <input
            type="text"
            id="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Second Name</label>
          <input
            type="text"
            id="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
      </div>
      <div style={{ clear: "both" }}></div>

      <button onClick={handleCancel} type={"button"}>
        Cancel
      </button>
      <button onClick={handleSubmit} type={"submit"}>
        Send
      </button>
    </form>
    <Modal open={portalShown} setOpen={setPortalShown}>
        <h2>Are you sure want to leave?</h2>
        <h5>Your changes are gonna be lost</h5>
    </Modal>
    </>
  );
}

export default Form;
