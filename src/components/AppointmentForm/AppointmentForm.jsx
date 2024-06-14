// import { Icon } from "../Icon/Icon";

export const AppointmentForm = ({ avatar_url, name }) => {
  return (
    <div>
      <h2 className="w-[450px] font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-darkColor mb-[20px]">
        Make an appointment with a babysitter
      </h2>
      <p className="w-[472px] font-normal text-[16px] leading-[1.25] text-[#11101c7f] mb-[40px]">
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className="flex items-center gap-[14px] mb-[40px]">
        <img
          src={avatar_url}
          alt={name}
          className="rounded-[15px]"
          width="44"
          height="44"
        />
        <div>
          <p className="font-medium text-[12px] leading-[1.3] text-[#8a8a89] mb-[8px]">
            Your nanny
          </p>
          <p className="font-medium text-[16px] leading-[1.5] text-darkColor"></p>
          {name}
        </div>
      </div>

      <form className="flex flex-col pb-[10px]">
        <div className="relative mb-[12px] lg:mb-[18px]">
          <input
            name="name"
            type="text"
            placeholder="Name"
            //   className={inputClass("name")}
            //   {...register("name")}
          />
          {/* {!errors.name?.message && dirtyFields.name && (
              <Icon
                id="success"
                size="16"
                className="fill-green-700 absolute top-1/2 right-4 transform -translate-y-1/2 lg:size-[20px]"
              />
            )}
            {errors.name?.message && dirtyFields.name && (
              <Icon
                id="error"
                size="16"
                className="fill-red-700 absolute top-1/2 right-4 transform -translate-y-1/2 lg:size-[20px]"
              />
            )}
            {renderMessage("name")} */}
        </div>
        {/* )} */}

        <div className="relative mb-[12px] lg:mb-[18px]">
          <input
            name="email"
            type="text"
            placeholder="Email"
            // className={inputClass("email")}
            // {...register("email")}
          />
          {/* {!errors.email?.message && dirtyFields.email && (
            <Icon
              id="success"
              size="16"
              className="fill-green-700 absolute top-1/2 right-4 transform -translate-y-1/2 lg:size-[20px]"
            />
          )}
          {errors.email?.message && dirtyFields.email && (
            <Icon
              id="error"
              size="16"
              className="fill-red-700 absolute top-1/2 right-4 transform -translate-y-1/2 lg:size-[20px]"
            />
          )}
          {renderMessage("email")} */}
        </div>

        <button
          type="submit"
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor hover:bg-[#f87775] focus:bg-[#f87775] hover:text-darkColor focus:text-darkColor transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};
