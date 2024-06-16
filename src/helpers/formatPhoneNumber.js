export const formatPhoneNumber = (e, setPhone, setValue) => {
  const inputValue = e.target.value.replace(/\D/g, "");
  const formattedValue = "+380 " + inputValue.slice(3);
  setPhone(formattedValue);
  setValue("phone", formattedValue, {
    shouldValidate: true,
    shouldDirty: true,
  });
};
