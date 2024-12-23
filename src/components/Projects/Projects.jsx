import React, { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for slides
  const slides = [
    {
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/outliant.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg",
      stat: "$1M+",
      description: "increased revenue",
      quote:
        "Webflow has the power of custom coded web development but the accessibility of a visual interface.",
      author: "Marcus Jones — COO",
      storyLink: "https://webflow.com/customers/outliant",
    },
    {
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/vanta.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa27a66d51bf3038ee_vanta-bg.webp",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff723543705ff82037b_Vanta.svg",
      stat: "5k",
      description: "Faster speed to market",
      quote:
        "Webflow's visual-first CMS has been very powerful in helping us save time on shipping new pages.",
      author: "Jenny Thai — Head of Content",
      storyLink: "https://webflow.com/customers/vanta",
    },
    {
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e9c8c8c31654c494fcc596_Frame.svg",
      stat: "20%",
      description: "increase in organic traffic",
      quote:
        "With Webflow, we’ve significantly improved organic traffic, SEO, and conversions.",
      author: "CMO",
      storyLink: "https://webflow.com/customers/lattice",
    },
  ];

  // Navigation Handlers
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <section className="section u-overflow-hidden u-bg-gray100">
      <div className="container">
        <div className="customer-title-wrapper">
          <div style={{ maxWidth: "34rem", width: "90%" }}>
            <h2>The best companies build on Webflow</h2>
          </div>
          <div className="slider_nav-wrapper">
            <button
              onClick={handlePrev}
              className="slider_nav-button"
              aria-label="Slide left"
            >
              <div className="h3">←</div>
            </button>
            <button
              onClick={handleNext}
              className="slider_nav-button"
              aria-label="Slide right"
            >
              <div className="h3">→</div>
            </button>
          </div>
        </div>
        <div className="customers-slider_wrapper">
          <ul
            className="customers-slider w-list-unstyled"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className="customers-slider_slide"
                aria-hidden={currentSlide !== index}
                style={{ width: "100%" }}
              >
                <div className="customers-slider_contents-size">
                  <div className="customers-slide">
                    <div className="customers-lider_video-bg">
                      <video
                        muted
                        playsInline
                        poster={slide.poster}
                        src={slide.video}
                        preload="none"
                        className="u-img-cover"
                      />
                    </div>
                    <div className="customers-slide_bg-overlay"></div>
                    <div className="customers-slide_logo">
                      <img
                        src={slide.logo}
                        alt=""
                        loading="lazy"
                        className="u-w-100"
                      />
                    </div>
                    <div className="customers-slide_frame">
                      <div className="customers-slide_frame-col cc-stat">
                        <div className="h0 cc-customers-stat">{slide.stat}</div>
                        <div className="customers-slider_frame-footer">
                          <div className="h5">{slide.description}</div>
                        </div>
                      </div>
                      <div className="customers-slide_frame-col cc-quote">
                        <p className="h4 cc-customers-slide-quote">
                          {slide.quote}
                        </p>
                        <div className="customers-slider_frame-footer">
                          <div className="h5">{slide.author}</div>
                          <div className="u-flex-no-shrink">
                            <a
                              href={slide.storyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button cc-text-only cc-text-white cc-customer-story-slider w-inline-block"
                            >
                              <div className="u-d-inline-block">Read story</div>
                              <div className="button-icon_right">→</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
