// import { Icon } from "../Icon/Icon";

export const AppointmentForm = ({ avatar_url, name }) => {
  return (
    <div>
      <h2 className="w-full md:w-[350px] lg:w-[450px] font-medium text-[30px] leading-[1.2] tracking-[-0.02em] text-darkColor mb-[15px] md:mb-[20px] sm-max:text-[25px] lg:text-[40px]">
        Make an appointment with a babysitter
      </h2>
      <p className="w-full md:w-[400px] lg:w-[472px] font-normal text-[14px] sm-max:text-[12px] md:text-[16px] sm-max:mb-[15px] leading-[1.25] text-[#11101c7f] mb-[20px] md:mb-[30px] lg:mb-[40px]">
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className="flex items-center gap-[14px] mb-[20px] md:mb-[30px] lg:mb-[40px]">
        <img
          src={avatar_url}
          alt={name}
          className="rounded-[15px] md:w-[44px] md:h-[44px] "
          width="38"
          height="38"
        />
        <div>
          <p className="font-medium text-[12px] leading-[1.3] text-[#8a8a89] md:mb-[4px]">
            Your nanny
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-[1.5] text-darkColor"></p>
          {name}
        </div>
      </div>

      <form className="flex flex-wrap gap-x-[8px] w-[472px]">
        <input
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Address"
          className="w-[232px] mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />
        <input
          name="phone"
          type="tel"
          placeholder="+380"
          className="w-[232px] mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />
        <input
          name="age"
          type="number"
          autoComplete="tel"
          placeholder="Child's age"
          className="w-[232px] mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />
        <input
          name="time"
          type="time"
          placeholder="00:00"
          className="w-[232px] mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          className="w-full mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />
        <input
          name="name"
          type="name"
          autoComplete="name"
          placeholder="Father's or mother's name"
          className="w-full mb-[16px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300"
          //   {...register("name")}
        />

        <textarea
          className="overflow-hidden resize-none outline-none h-[116px] w-full bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300 mb-[40px]"
          name="comment"
          id="comment"
          rows="5"
          placeholder="Comment"
        />

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
