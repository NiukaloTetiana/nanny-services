import { useState } from "react";
import { toast } from "react-toastify";

import { Loader } from "../../components";

import { logOutUser } from "../../services";

export const LogOut = ({ toggleLogOutModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    logOutUser()
      .then(() => {
        toggleLogOutModal();
        toast.warning("In order to use the application you must log in.");
      })
      .catch(() => {
        toast.error("Oops...Something wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className="font-medium text-[24px] text-center leading-[1.2] tracking-[-0.02em] text-darkColor mb-[40px] sm-max:mb-[25px] sm-max:text-[25px] lg:text-[28px]">
        Are you sure you want to log out?
      </p>
      <div className="flex gap-[25px] justify-center">
        <button
          onClick={handleLogout}
          type="button"
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor hover:bg-hoverColor focus:bg-hoverColor hover:text-darkColor focus:text-darkColor transition duration-300"
        >
          Log out
        </button>
        <button
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor hover:bg-hoverColor focus:bg-hoverColor hover:text-darkColor focus:text-darkColor transition duration-300"
          onClick={toggleLogOutModal}
        >
          Cancel
        </button>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
