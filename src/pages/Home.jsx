import { useModal } from "../hooks";
import { Modal } from "../components";

const Home = () => {
  const [isOpenModal, toggleModal] = useModal();
  return (
    <div>
      Home page
      <button onClick={toggleModal}>Open</button>
      {isOpenModal && <Modal toggleModal={toggleModal}></Modal>}
    </div>
  );
};

export default Home;
