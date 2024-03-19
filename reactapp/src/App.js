import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="content">
        <h1>Modal heading</h1>
        <p>Modal content. Click Close to close the modal</p>
        <button onClick={props.close} className="btn btn-danger">
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="app">
      <button onClick={toggleModal} className="btn btn-primary m-5">
        Open modal
      </button>
      {showModal && <Modal close={toggleModal}></Modal>}
    </div>
  );
}

export default App;
