import { useCallback, useEffect, useRef } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const TWEEN_FACTOR_BASE = 0.84;

const EmblaCarousel = (props) => {
  const { t } = useTranslation();
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0.4, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <section className="embla rounded-xl">
      <div className="embla__controls">
 <SectionHeader
    heading={t("bestCompanySays.heading")}
    classes={{
      headingClass:"mb-0 mt-0 text-center md:text-left",
    }}
  />
        <div className="!hidden lg:!flex embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport md:overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img h-[550px] w-full object-cover"
                src={slide.poster}
                alt=""
              />

              <div className="embla__slide__inner">
                <img
                  className="absolute left-4 top-5 w-24 sm:left-14 sm:top-10 sm:block sm:w-24 lg:w-32"
                  src={slide.logo}
                  alt=""
                />

                <div className="bg-[#050f188f]  absolute overflow-hidden bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex flex-col xl:flex-row xl:items-center gap-4 rounded-md border border-gray-300 p-2 text-white sm:bottom-10 sm:left-14 sm:right-10 sm:p-4 lg:p-6">
                  <p className="min-w-[28%] flex flex-row flex-wrap md:flex-col gap-x-2 gap-y-2 md:gap-y-4 truncate">
                    <span className="text-xl md:text-3xl font-bold">
                      {slide.stat}
                    </span>
                    <span className="text-xl md:text-xl text-wrap">
                      {t(`bestCompanySays.companies.${index}.description`)}
                    </span>
                  </p>

                  <div className="flex flex-col gap-4">
                    <p className="line-clamp-4 lg:line-clamp-3 text-base font-medium md:text-lg">
                      "{t(`bestCompanySays.companies.${index}.quote`)}"
                    </p>

                    <div className="text-sm md:text-lg flex flex-col gap-2 md:flex-row md:items-center justify-between">
                      <p className="">{t(`bestCompanySays.companies.${index}.author`)}</p>

                      <a
                        className="flex items-center gap-2 group/read text-base font-semibold"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{t(`bestCompanySays.companies.${index}.button`)}</span>
                        <ArrowRightIcon className="h-4 w-4 group-hover/read:translate-x-1 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
