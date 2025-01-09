import { useCallback, useEffect, useRef } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

const TWEEN_FACTOR_BASE = 0.84;

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const calculateTweenFactor = useCallback(
    (emblaApi) => {
      tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    },
    []
  );

  const updateSlideOpacity = useCallback(
    (emblaApi, eventName) => {
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
                diffToTarget =
                  scrollSnap + Math.sign(target) * (1 - Math.abs(scrollProgress));
              }
            });
          }

          const opacity = Math.max(0.4, 1 - Math.abs(diffToTarget * tweenFactor.current));
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity.toString();
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    calculateTweenFactor(emblaApi);
    updateSlideOpacity(emblaApi);
    emblaApi
      .on("reInit", calculateTweenFactor)
      .on("reInit", updateSlideOpacity)
      .on("scroll", updateSlideOpacity)
      .on("slideFocus", updateSlideOpacity);
  }, [emblaApi, calculateTweenFactor, updateSlideOpacity]);

  return (
    <section className="embla rounded-lg bg-gray-50  flex flex-col gap-8 px-0 py-4 md:px-8 md:py-8">
      <div className="embla__controls !my-0 flex items-center justify-between px-4">
        <SectionHeader
                heading=" The best companies say about us"
              />
        <div className="hidden lg:flex space-x-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative rounded-lg bg-white shadow-md">
                <img
                  className="h-48 w-full rounded-t-lg object-cover"
                  src={`https://picsum.photos/600/350?v=${index}`}
                  alt={`Slide ${index}`}
                />
                <div className="p-6">
                  <img
                    className="absolute top-4 left-4 w-16 sm:w-20"
                    src={slide.logo}
                    alt="Company Logo"
                  />
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-800">
                      {slide.stat}
                    </p>
                    <p className="mt-2 text-gray-600">{slide.description}</p>
                  </div>
                  <blockquote className="mt-4 italic text-gray-500">
                    "{slide.quote}"
                  </blockquote>
                  <div className="mt-6 flex flex-col gap-y-3 md:flex-row  justify-between text-sm text-gray-700">
                    <p>{slide.author}</p>
                    <a
                      href={slide.storyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      Read the story <span className="ml-1">&rarr;</span>
                    </a>
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
