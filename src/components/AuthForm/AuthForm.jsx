import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Icon } from "../../components";
import {
  registrationSchema,
  logInSchema,
} from "../../schemas/validationSchemas";

export const AuthForm = ({ registration, onClick }) => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registration ? registrationSchema : logInSchema),
  });

  const handleSpanClick = (value) => {
    onClick(value);
  };

  const inputClass = (fieldName) => {
    const baseClass =
      "w-full h-[52px] bg-transparent border border-[#11101c19] rounded-[12px] px-[18px] py-[16px] font-normal text-[16px] leading-[1.25] text-[#11101c] placeholder:text-[#11101C] hover:shadow-custom-shadow focus:shadow-custom-shadow duration-300";
    const errorClass = "border-red-700";
    const successClass =
      "border-green-700 hover:shadow-success-shadow focus:shadow-success-shadow";

    if (errors[fieldName]?.message && dirtyFields[fieldName]) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName]?.message && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }
    return baseClass;
  };

  const renderMessage = (fieldName) => {
    if (errors[fieldName]?.message && dirtyFields[fieldName]) {
      return (
        <p className="text-red-700 text-[14px] font-normal absolute bottom-[-7px] left-[8px] px-[4px] bg-[#fbfbfb]">
          {errors[fieldName]?.message}
        </p>
      );
    }
    return (
      <p className="text-green-700 text-[14px] font-normal absolute bottom-[-7px] left-[8px] px-[4px] bg-[#fbfbfb]">
        {!errors[fieldName]?.message && dirtyFields[fieldName]
          ? `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
              1
            )} is entered correct`
          : ""}
      </p>
    );
  };

  const onSubmit = (data) => {
    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };

    if (registration) {
      userData.name = name;
    }
  };

  return (
    <div>
      <h2 className="font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-[#11101c] mb-[20px]">
        {registration ? "Registration" : "Log In"}
      </h2>
      <p className="font-normal text-[16px] leading-[1.25] text-[#11101c7f] mb-[40px] w-[438px]">
        {registration
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your babysitter search."}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col pb-[10px]"
      >
        {registration && (
          <div className="relative mb-[18px]">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={inputClass("name")}
              {...register("name")}
            />
            {!errors.name?.message && dirtyFields.name && (
              <Icon
                id="success"
                size="20"
                className="fill-green-700 absolute top-1/2 right-4 transform -translate-y-1/2"
              />
            )}
            {errors.name?.message && dirtyFields.name && (
              <Icon
                id="error"
                size="20"
                className="fill-red-700 absolute top-1/2 right-4 transform -translate-y-1/2"
              />
            )}
            {renderMessage("name")}
          </div>
        )}

        <div className="relative mb-[18px]">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className={inputClass("email")}
            {...register("email")}
          />
          {!errors.email?.message && dirtyFields.email && (
            <Icon
              id="success"
              size="20"
              className="fill-green-700 absolute top-1/2 right-4 transform -translate-y-1/2"
            />
          )}
          {errors.email?.message && dirtyFields.email && (
            <Icon
              id="error"
              size="20"
              className="fill-red-700 absolute top-1/2 right-4 transform -translate-y-1/2"
            />
          )}
          {renderMessage("email")}
        </div>
        <div>
          <div className="relative mb-[40px]">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className={inputClass("password")}
              {...register("password")}
            />
            <button type="button" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? (
                <Icon
                  id="eye"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 stroke-[#11101c] fill-none"
                  size="20"
                />
              ) : (
                <Icon
                  id="eye-off"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 stroke-[#11101c] fill-none"
                  size="20"
                />
              )}
            </button>
            {renderMessage("password")}
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="border-none rounded-[30px] px-[18px] py-[16px] w-full h-[52px] bg-[#f03f3b] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] hover:bg-[#D2110D] focus:bg-[#D2110D] duration-300"
          >
            {registration ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>

      <p className="w-full font-normal text-[16px] text-center leading-[1.25] text-[#11101c7f]">
        {registration ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          onClick={() => {
            registration ? handleSpanClick(false) : handleSpanClick(true);
          }}
          className="text-[#11101c] underline cursor-pointer"
        >
          {registration ? "Log In" : "Registration"}
        </span>
      </p>
    </div>
  );
};
