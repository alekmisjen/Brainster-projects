import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Testimonials } from "../../types/types";
import data from "../../db.json";
import "./style.css";
const Testimonial = () => {
  const testimonials: Testimonials[] = data.testimonials;

  // Split testimonials into chunks of 3
  const chunkedTestimonials = testimonials.reduce<Testimonials[][]>(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // Start a new chunk
      }
      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={5000}
        controls={false} // Hides default controls
        indicators={false} // Hides default indicators
      >
        {chunkedTestimonials.map((testimonialGroup, index) => (
          <Carousel.Item key={index}>
            <div className=" row justify-content-center ">
              {testimonialGroup.map((testimonial) => {
                return (
                  <div
                    key={testimonial.id}
                    className="col-lg-4 col-md-6 col-sm-12 p-3 d-flex align-items-stretch"
                  >
                    <div className=" d-flex align-items-center p-3  flex-column">
                      <div className="test-inner">
                        <div className="test-author-thumb d-flex">
                          <img
                            src={testimonial.avatar}
                            alt="Testimonial author"
                            className="img-fluid"
                          />
                          <div className="test-author-info">
                            <p> {testimonial.message}</p>
                            <div className="d-flex align-items-center ">
                              <h5 className="mb-1 me-2">
                                — {testimonial.first_name}
                              </h5>
                              <div className="rating text-warning">
                                {"★".repeat(testimonial.rating)}
                                {"☆".repeat(5 - testimonial.rating)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="carousel-controls d-flex align-items-center">
        <div className="blackline-container flex-grow-1 position-relative">
          <div className="blackline">
            <div
              className="progress-bar"
              style={{
                width: `${
                  ((activeIndex + 1) / chunkedTestimonials.length) * 100
                }%`,
                height: "100%",
                backgroundColor: "orange",
              }}
            ></div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="btn btn-orange me-2"
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="btn btn-orange"
            onClick={() =>
              setActiveIndex((prev) =>
                Math.min(prev + 1, chunkedTestimonials.length - 1)
              )
            }
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
