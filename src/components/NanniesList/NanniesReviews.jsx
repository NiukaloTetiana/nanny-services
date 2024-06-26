import { AppointmentForm, Icon, Modal } from "..";

import { useModal } from "../../hooks";

export const NanniesReviews = ({ reviews, name, avatar_url }) => {
  const [isOpenModal, toggleModal] = useModal();
  const getFirstLetter = (reviewer) => reviewer.charAt(0);

  return (
    <>
      <ul className="mb-[30px] lg:mb-[48px]">
        {reviews.map(({ reviewer, rating, comment }, index) => (
          <li key={index} className="mb-[25px]">
            <div className="flex gap-[12px] mb-[18px]">
              <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-secondBorderColor">
                <p className="font-medium text-[20px] text-accentColor leading-[1] text-center">
                  {getFirstLetter(reviewer)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-[16px] leading-[1.25] text-darkColor mb-[4px]">
                  {reviewer}
                </h4>
                <p className="flex items-center gap-[8px] font-medium text-[16px] leading-[1.25] text-darkColor">
                  <Icon id="star" size="16" className="fill-[#FFC531]" />
                  {rating}
                </p>
              </div>
            </div>

            <p className="font-normal text-[16px] leading-[1.25] text-textColor">
              {comment}
            </p>
          </li>
        ))}
      </ul>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="p-[37px] lg:p-[64px] lg:pr-[36px]"
        >
          <AppointmentForm avatar_url={avatar_url} name={name} />
        </Modal>
      )}
      <button
        onClick={toggleModal}
        type="button"
        className="mx-auto block md:inline-block w-[215px] h-[48px] py-[14px] px-[26px] bg-accentColor border border-transparent rounded-[30px] shadow-md font-medium text-[16px] text-lightColor leading-[1.25] tracking-[-0.01em] text-center hover:text-accentColor focus:text-accentColor hover:bg-lightColor focus:bg-lightColor focus:border-opacityDarkColor hover:border-opacityDarkColor transition duration-500"
      >
        Make an appointment
      </button>
    </>
  );
};
