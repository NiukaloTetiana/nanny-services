import { Icon } from "../../components";

export const UserBar = () => {
  return (
    <div className="flex items-center gap-[24px]">
      <div className="flex items-center gap-[14px]">
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-lightColor">
          <Icon id="user" className="fill-accentColor" size="24" />
        </div>
        <p className="font-medium text-[18px] text-lightColor leading-[1.1] tracking-[-0.01em]">
          User
        </p>
      </div>
      <button
        type="button"
        className="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[35px] py-[14px] w-[134px] font-medium text-[16px] text-lightColor leading-[125%] tracking-[-0.01em] primary-btn-hover"
      >
        Log out
      </button>
    </div>
  );
};
