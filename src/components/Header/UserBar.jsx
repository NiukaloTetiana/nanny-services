import { useCurrentUser, useModal } from "../../hooks";

import { Icon, LogOut, Modal } from "../../components";

export const UserBar = ({ className, userName, toggleMenu }) => {
  const { user } = useCurrentUser();
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div
      className={`${className} flex-wrap lg:flex-nowrap justify-center items-center gap-[24px]`}
    >
      <div className="flex items-center gap-[14px]">
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-lightColor">
          <Icon id="user" className="fill-accentColor" size="24" />
        </div>
        <p className="font-medium text-[18px] text-lightColor leading-[1.1] tracking-[-0.01em]">
          {userName || user?.displayName}
        </p>
      </div>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="p-[44px] md:p-[64px]"
        >
          <LogOut toggleLogOutModal={toggleModal} />
        </Modal>
      )}
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          toggleModal();
        }}
        type="button"
        className="border border-opacityDarkColor bg-transparent rounded-[30px] px-[36px] py-[14px] w-[134px] font-medium text-[16px] text-lightColor leading-[1.25] tracking-[-0.01em] primary-btn-hover"
      >
        Log out
      </button>
    </div>
  );
};
