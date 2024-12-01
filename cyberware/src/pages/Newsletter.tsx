import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "../components/Button/Button"; // Assuming you have a Button component
import { NewsletterPage } from "../types/types";
import newsletterData from "../db.json"; // Directly importing data from db.json
import Footer from "../components/Footer/Footer";

const data: NewsletterPage[] = newsletterData.newsletter; // Extract the data from the imported JSON

export const Newsletter = () => {
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<NewsletterPage | null>(null);

  const handleCardClick = (newsletter: NewsletterPage) => {
    setSelectedNewsletter(newsletter);
  };

  return (
    <>
      <Container fluid className="top">
        <Row>
          {/* Hero Section */}
          <Col md={6} className="bg-white text-center p-4">
            {selectedNewsletter ? (
              <>
                <h1 className="mt-3">{selectedNewsletter.title}</h1>
                <h4>{selectedNewsletter.subtitle}</h4>
                <p>
                  By {selectedNewsletter.author} on {selectedNewsletter.date}
                </p>
              </>
            ) : (
              <h2 className="mt-5">Select a newsletter</h2>
            )}
          </Col>
        </Row>
        <Row>
          {/* Left Section */}
          <Col md={3} className="bg-light p-3">
            <h5 className="mt-3">Newsletters</h5>
            <div
              className="scrollable-newsletters"
              style={{
                maxHeight: "70%",
                overflowY: "auto",
                paddingRight: "10px",
              }}
            >
              {data && data.length > 0 ? (
                data.map((item) => (
                  <Card key={item.id} className="mb-2">
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <small>
                          By {item.author} on {item.date}
                        </small>
                        <br />
                        {item.subtitle}
                      </Card.Text>
                      <Button
                        label="View Details"
                        handleOnClick={() => handleCardClick(item)}
                      />
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>No newsletters available</p>
              )}
            </div>
          </Col>

          {/* Right Section */}
          <Col md={9} className="bg-light p-3">
            <h5 className="mt-3">Details</h5>
            {selectedNewsletter ? (
              <>
                {selectedNewsletter.body.map((section, index) => (
                  <div key={index}>
                    <h6>{section.title}</h6>
                    {section.desc && <p>{section.desc}</p>}
                    {section.content?.map((contentItem, subIndex) => (
                      <div key={subIndex}>
                        <h6>{contentItem.subTitle}</h6>
                        <p>{contentItem.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <p>Select a newsletter to view details</p>
            )}
          </Col>
        </Row>
        <Row className="">
          {/* Bottom Section */}
          <Col md={12} className="bg-light p-3">
            <h5 className="mt-3">Newsletters</h5>
            <div
              className="scrollable-newsletters"
              style={{
                display: "flex",
                overflowX: "auto",
                paddingRight: "10px",
              }}
            >
              {data && data.length > 0 ? (
                <Row style={{ flexShrink: 0 }}>
                  {data.map((item) => (
                    <Col key={item.id} className=" ">
                      <Card className="mb-4 d-flex align-items-center ">
                        <Card.Body className="">
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            <small>
                              By {item.author} on {item.date}
                            </small>
                            <br />
                            {item.subtitle}
                          </Card.Text>
                          <Button
                            label="View Details"
                            handleOnClick={() => handleCardClick(item)}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <p>No newsletters available</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
