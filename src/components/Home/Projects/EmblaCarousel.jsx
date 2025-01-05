import { useCallback, useEffect, useRef } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const TWEEN_FACTOR_BASE = 0.84;

const EmblaCarousel = (props) => {
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
        <h2 className="text-left text-3xl font-bold text-gray-800 md:text-4xl">
          The best companies <br /> say about us
        </h2>

        <div className="!hidden lg:flex embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />

              <div className="embla__slide__inner">
                <img
                  className="absolute left-4 top-4 w-20 sm:left-14 sm:top-10 sm:block sm:w-24 lg:w-32"
                  src={slide.logo}
                  alt="Your alt text"
                />

                <div className="absolute bottom-2 left-6 right-2 flex items-center gap-6 rounded-md border border-gray-300 p-2 text-white sm:bottom-10 sm:left-14 sm:right-10 sm:p-4 lg:p-6">
                  <p className="order-0 hidden flex-col gap-4 sm:flex">
                    <span className="md:text-4x text-lg font-semibold sm:text-2xl lg:text-6xl">
                      {slide.stat}
                    </span>
                    <span className="sm:text-md text-sm">
                      {slide.description}
                    </span>
                  </p>

                  <div className="order-1 flex flex-grow-0 flex-col justify-between gap-2 sm:gap-4 md:gap-8 lg:gap-12">
                    <p className="sm:text-md line-clamp-2 text-sm font-medium sm:line-clamp-none xl:text-lg">{`"${slide.quote}"`}</p>

                    <div className="sm:text-md flex items-center justify-between text-sm">
                      <p className="">{slide.author}</p>

                      <a
                        className="flex items-center gap-2"
                        href={slide.storyLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Read the story</span>
                        <span>&rarr;</span>
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
