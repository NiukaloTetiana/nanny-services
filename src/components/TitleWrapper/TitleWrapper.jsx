export const TitleWrapper = ({ title }) => {
  return (
    <div className="relative w-full h-[480px] sm-max:h-[400px] md:min-h-screen bg-bgLigtColor bg-[url('https://interhit.ru/wp-content/uploads/2020/06/114621_or.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px] z-[0]">
      <div className="absolute inset-0 bg-[#121417] opacity-60 rounded-[30px] z-[1]"></div>
      <h3 className="absolute bottom-[20%] md:bottom-[30%] left-[50%] translate-x-[-50%] font-normal text-center sm-max:text-[28px] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-lightColor z-[2] w-full">
        {title}
      </h3>
    </div>
  );
};
