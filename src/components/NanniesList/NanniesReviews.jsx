import { Icon, Modal } from "..";
import { useModal } from "../../hooks";

export const NanniesReviews = ({ reviews }) => {
  const [isOpenModal, toggleModal] = useModal();
  const getFirstLetter = (reviewer) => reviewer.charAt(0);

  return (
    <>
      <ul className="mb-[48px]">
        {reviews.map(({ reviewer, rating, comment }, index) => (
          <li key={index} className="mb-[25px]">
            <div className="flex gap-[12px] mb-[18px]">
              <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-[#f03f3b33]">
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

            <p className="font-normal text-[16px] leading-[1.25] text-[#11101c7f]">
              {comment}
            </p>
          </li>
        ))}
      </ul>

      {isOpenModal && <Modal toggleModal={toggleModal}></Modal>}
      <button
        onClick={toggleModal}
        type="button"
        className="w-[215px] h-[48px] py-[14px] px-[26px] bg-accentColor border border-transparent rounded-[30px] shadow-sm font-medium text-[16px] text-lightColor leading-[1.25] tracking-[-0.01em] text-center hover:text-accentColor focus:text-accentColor hover:bg-lightColor focus:bg-lightColor focus:border-[#fbfbfb66] hover:border-[#fbfbfb66] transition duration-500"
      >
        Make an appointment
      </button>
    </>
  );
};
