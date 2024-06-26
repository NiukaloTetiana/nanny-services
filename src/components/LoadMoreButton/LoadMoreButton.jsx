export const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="block mx-auto w-[159px] h-[48px] py-[14px] px-[38px] bg-accentColor border border-transparent rounded-[30px] shadow-md font-medium text-[16px] text-lightColor leading-[1.25] text-center hover:text-accentColor focus:text-accentColor hover:bg-lightColor focus:bg-lightColor focus:border-opacityDarkColor hover:border-opacityDarkColor transition duration-500"
      onClick={onClick}
    >
      Load More
    </button>
  );
};
