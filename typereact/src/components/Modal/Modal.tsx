import { Dispatch } from "react";
import { useHistory } from "react-router";
import ReactDom from "react-dom";
import "./Modal.scss";

interface IProps {
  open: boolean;
  children: React.ReactNode;
  setOpen: Dispatch<any>;
}

function Modal({ open, children, setOpen }: IProps) {

  const history = useHistory();
  if (!open) return null;

  const handleLeave = () => {
    setOpen(true);
    history.push("/");
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return ReactDom.createPortal(
    <div id="overlay">
      <div id="modal">
        {children}
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleLeave}>Leave</button>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

export default Modal;
