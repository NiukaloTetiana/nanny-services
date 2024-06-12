import { useState } from "react";

import { useModal } from "../../hooks";
import { AuthForm, Modal } from "../../components";

export const AuthButton = ({ className, classLogIn, classRegistration }) => {
  const [isOpenModal, toggleModal] = useModal();
  const [registration, setRegistration] = useState(false);

  const handleClick = (value) => {
    setRegistration(value);
  };

  return (
    <>
      <ul className={className}>
        <li>
          <button
            type="submit"
            onClick={() => {
              setRegistration(false);
              toggleModal();
            }}
            className={classLogIn}
          >
            Log In
          </button>
        </li>
        <li>
          <button
            type="submit"
            onClick={() => {
              setRegistration(true);
              toggleModal();
            }}
            className={classRegistration}
          >
            Registration
          </button>
        </li>
      </ul>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <AuthForm registration={registration} onClick={handleClick} />
        </Modal>
      )}
    </>
  );
};
