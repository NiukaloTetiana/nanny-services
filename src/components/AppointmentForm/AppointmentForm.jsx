import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Icon } from "../../components";
import { appointmentSchema } from "../../schemas/validationSchemas";
import { formatPhoneNumber } from "../../helpers";
import { createAppointment } from "../../services";

export const AppointmentForm = ({ avatar_url, name }) => {
  const [phone, setPhone] = useState("+380 ");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(appointmentSchema),
  });

  const onSubmit = async (data) => {
    try {
      await createAppointment(data);
      toast.success("Appointment created successfully!");
      reset();
      setPhone("+380 ");
    } catch (error) {
      toast.error("Error creating appointment.");
    }
  };

  const inputClass = (fieldName) => {
    const baseClass =
      "w-full bg-transparent border rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-darkColor hover:shadow-custom-shadow focus:shadow-custom-shadow transition duration-300";
    const errorClass = "border-red-700";
    const successClass =
      "border-green-700 hover:shadow-success-shadow focus:shadow-success-shadow";

    if (errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }
    return baseClass;
  };

  const renderMessage = (fieldName) => {
    if (errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-red-700 text-[10px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-lightColor">
          {errors[fieldName].message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-green-700 text-[10px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-lightColor">
          {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
            1
          )} is entered correctly`}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="max-h-[80vh] px-[4px] lg:pr-[32px] scrollbar">
      <ToastContainer />
      <h2 className="w-full md:w-[350px] lg:w-[450px] font-medium text-[30px] leading-[1.2] tracking-[-0.02em] text-darkColor mb-[15px] md:mb-[20px] sm-max:text-[25px] lg:text-[40px]">
        Make an appointment with a babysitter
      </h2>
      <p className="w-full md:w-[470px] font-normal text-[14px] sm-max:text-[12px] md:text-[16px] sm-max:mb-[15px] leading-[1.25] text-textColor mb-[20px] md:mb-[30px] lg:mb-[40px]">
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className="flex items-center gap-[14px] mb-[20px] md:mb-[30px] lg:mb-[40px]">
        <img
          src={avatar_url}
          alt={name}
          className="rounded-[15px] md:w-[44px] md:h-[44px]"
          width="38"
          height="38"
        />
        <div>
          <p className="font-medium text-[12px] leading-[1.3] text-secondTextColor md:mb-[4px]">
            Your nanny
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-[1.5] text-darkColor">
            {name}
          </p>
        </div>
      </div>

      <form
        className="flex flex-col md:flex-row md:flex-wrap gap-x-[8px] w-full md:w-[472px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full md:w-[232px] mb-[8px] md:mb-[16px]">
          <input
            {...register("address")}
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Address"
            className={inputClass("address")}
          />
          {renderMessage("address")}
        </div>
        <div className="relative w-full md:w-[232px] mb-[8px] md:mb-[16px]">
          <input
            {...register("phone")}
            name="phone"
            type="tel"
            value={phone}
            className={inputClass("phone")}
            autoComplete="tel"
            onChange={(e) => formatPhoneNumber(e, setPhone, setValue)}
          />
          {renderMessage("phone")}
        </div>
        <div className="relative w-full md:w-[232px] mb-[8px] md:mb-[16px]">
          <input
            {...register("age")}
            name="age"
            type="number"
            min={1}
            placeholder="Child's age"
            className={inputClass("age")}
          />
          {renderMessage("age")}
        </div>

        <div className="relative w-full md:w-[232px] mb-[8px] md:mb-[16px]">
          <Controller
            control={control}
            name="time"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePicker
                selected={value}
                onChange={(date) => {
                  onChange(date);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Meeting time"
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                placeholderText="00:00"
                className={inputClass("time")}
                calendarClassName="w-[151px] h-[180px] bg-white shadow-datepicker-shadow rounded-[12px] p-[16px] font-medium text-[16px] leading-[1.5] text-darkColor overflow-y-auto scrollbar custom-time-select"
                onChangeRaw={(e) => {
                  const input = e.target.value;
                  if (!/^([01]?[0-9]|2[0-3]):([0-5][0-9])?$/.test(input)) {
                    e.preventDefault();
                  }
                }}
              />
            )}
          />
          <div className="absolute right-[18px] top-0 flex items-center h-full pointer-events-none">
            <Icon
              id="clock"
              size="20"
              className="stroke-darkColor fill-none group-focus:fill-opacityDarkColor transition duration-300"
            />
          </div>
          {renderMessage("time")}
        </div>

        <div className="relative w-full mb-[8px] md:mb-[16px]">
          <input
            {...register("email")}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className={inputClass("email")}
          />
          {renderMessage("email")}
        </div>
        <div className="relative w-full mb-[8px] md:mb-[16px]">
          <input
            {...register("name")}
            name="name"
            type="name"
            autoComplete="name"
            placeholder="Father's or mother's name"
            className={inputClass("name")}
          />
          {renderMessage("name")}
        </div>
        <div className="relative w-full mb-[20px] md:mb-[40px]">
          <div className="rounded-[12px]">
            <textarea
              {...register("comment")}
              className={`align-top resize-none outline-none h-[116px] scrollbar ${inputClass(
                "comment"
              )}`}
              name="comment"
              id="comment"
              rows="5"
              placeholder="Comment"
            />
          </div>
          {renderMessage("comment")}
        </div>

        <button
          type="submit"
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor hover:bg-hoverColor focus:bg-hoverColor hover:text-darkColor focus:text-darkColor transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};
