import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <h2 className="text-3xl font-semibold">
          The best companies <br /> say about us
        </h2>

        <div className="embla__buttons">
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
                  className="absolute left-14 top-10"
                  src={slide.logo}
                  alt="Your alt text"
                />

                <div className="absolute bottom-10 left-14 right-10 flex items-center gap-6 rounded-md border border-gray-300 p-6 text-white">
                  <p className="order-0 flex flex-grow flex-col gap-4">
                    <span className="text-6xl font-semibold">{slide.stat}</span>
                    {slide.description}
                  </p>

                  <div className="order-1 flex flex-grow-0 flex-col justify-between gap-12">
                    <p className="text-lg font-medium">{`"${slide.quote}"`}</p>

                    <div className="flex items-center justify-between">
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
