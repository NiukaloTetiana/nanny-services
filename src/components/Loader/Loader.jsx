import RingLoader from "react-spinners/RingLoader";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-[#0b0b0b99] backdrop-blur-sm w-full h-full left-0 top-0 z-50">
      <RingLoader
        color="#F03F3B"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </div>
  );
};
