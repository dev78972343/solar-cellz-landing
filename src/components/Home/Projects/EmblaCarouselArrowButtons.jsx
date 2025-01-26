import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { disabled, children, ...restProps } = props;

  return (
    <button
      className={cn("embla__button embla__button--prev , !w-10 !h-10 !bg-primary-button-gradient hover:!bg-gray-300 hover:!text-white !text-white",
        disabled && "opacity-60",
      )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <ArrowLeft className="size-[18px]"/>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { disabled, children, ...restProps } = props;

  return (
    <button
    className={cn("embla__button embla__button--next , !w-10 !h-10 !bg-primary-button-gradient hover:!text-white  !text-white",
      disabled && "opacity-60",
    )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
     <ArrowRight className="size-[18px]"/>
      {children}
    </button>
  );
};
