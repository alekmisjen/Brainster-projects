import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { TestimonialClient } from "../../types/types"; // Correct import
import data from "../../db.json"; // Make sure you have the correct path to your db.json
import "./style.css";

const ClientTestimonial = () => {
  const clients: TestimonialClient[] = data.clientTestimonial; // Should be an array of TestimonialClient objects

  // Split testimonials into chunks of 3
  const chunkedTestimonials = clients.reduce<TestimonialClient[][]>(
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
    <div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={5000}
        controls={false} // Hides default controls
        indicators={false} // Hides default indicators
      >
        {chunkedTestimonials.map((testimonialGroup, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {testimonialGroup.map((testimonial, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 p-3 d-flex align-items-stretch"
                >
                  <div className="d-flex align-items-center p-3 flex-column">
                    <div className="test-inner">
                      <div className="test-author-thumb d-flex">
                        <img
                          src={testimonial.icon} // Render the author's image
                          alt="Testimonial author"
                          className="img-fluid"
                        />
                        <div className="test-author-info">
                          {/* Render each section of the body */}
                          {testimonial.body.map((section, idx) => (
                            <div key={idx} className="testimonial-section">
                              <strong>{section.subTitle}:</strong>
                              <p>{section.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default ClientTestimonial;
