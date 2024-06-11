import { useState, useRef, useEffect } from "react";

import { Icon } from "../../components";
import { getRandomNumber } from "../../helpers";

export const BgImageWrapper = () => {
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
      className="flex items-center gap-[16px] bg-lightColor rounded-[20px] p-[32px] w-[284px]"
      onAnimationStart={handleAnimationStart}
    >
      <div className="flex justify-center items-center w-[54px] h-[54px] rounded-[13px] bg-accentColor">
        <Icon id="check" className="fill-lightColor lg:size-[30px]" size="30" />
      </div>
      <div>
        <p className="font-normal text-[16px] leading-[125%] text-[#11101c7f] mb-[4px]">
          Experienced nannies
        </p>
        <p className="font-bold text-[24px] leading-[125%] text-darkColor">
          {randomSum}
        </p>
      </div>
    </div>
  );
};
