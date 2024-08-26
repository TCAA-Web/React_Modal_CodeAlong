import { useState } from "react";
import "./App.css";
import { Modal } from "./component/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    alert("Du har slettet alt i kurven");
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <h1>Er du sikker??</h1>
        <button onClick={() => handleConfirm()}>Fortsæt</button>
        <button onClick={() => setIsModalOpen(false)}>Gå tilbage</button>
      </Modal>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </>
  );
}

export default App;
