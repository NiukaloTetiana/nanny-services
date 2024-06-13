import { useState, useRef, useEffect } from "react";

import { Icon } from "..";
import { getRandomNumber } from "../../helpers";

export const MovingWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animationDuration] = useState(15);
  const [randomSum, setRandomSum] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const viewportWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    setRandomSum(getRandomNumber());
  }, [currentStep]);

  const handleAnimationStart = () => {
    const viewportWidth = window.innerWidth;
    viewportWidthRef.current = viewportWidth;

    if (viewportWidth < 768) {
      return;
    }

    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateAnimationProgress = () => {
    const elapsedTime = performance.now() - startTimeRef.current;
    const percentage = (elapsedTime / (animationDuration * 1000)) * 100;

    if (
      viewportWidthRef.current !== window.innerWidth &&
      window.innerWidth < 768
    ) {
      return;
    }

    updateCurrentStep(percentage);

    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateCurrentStep = (percentage) => {
    setCurrentStep((prevStep) => {
      const newStep = Math.ceil(percentage / 12.5);
      return newStep !== prevStep ? newStep : prevStep;
    });
  };

  return (
    <div
      className="flex items-center gap-[12px] lg:gap-[16px] bg-lightColor rounded-[20px] p-[14px] md:p-[24px] lg:p-[32px] absolute bottom-[-100%] left-[-12px] md:bottom-[-130%] md:left-[-20px] lg:top-0 lg:bottom-auto lg:left-[50%] w-[180px] md:w-[254px] lg:w-[284px] z-[1] lg:z-[-1] overflow-hidden animate-moveBox"
      onAnimationStart={handleAnimationStart}
    >
      <div className="flex justify-center items-center w-[38px] h-[38px] md:w-[46px] md:h-[46px] lg:w-[54px] lg:h-[54px] rounded-[13px] bg-accentColor">
        <Icon
          id="check"
          className="fill-lightColor mb:size-[28px] lg:size-[30px]"
          size="18"
        />
      </div>
      <div>
        <p className="font-normal text-[10px] md:text-[16px] leading-[125%] text-[#11101c7f] mb-[4px]">
          Experienced nannies
        </p>
        <p className="font-bold text-[18px] md:text-[24px] leading-[125%] text-darkColor">
          {randomSum}
        </p>
      </div>
    </div>
  );
};
