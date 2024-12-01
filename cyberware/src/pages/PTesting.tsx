import Footer from "../components/Footer/Footer";
import { PTestingServicePage } from "../types/types";

export interface PTestingServiceProps {
  data: PTestingServicePage;
}
export const PTesting = ({ data }: PTestingServiceProps) => {
  const renderFirstWord = (title: string) => {
    // Split the title into the first word and the rest of the title
    const words = title.split(" ");
    const firstWord = words[0];

    const restOfTitle = words.slice(1).join(" ");

    return (
      <>
        <span className="color-primary">{firstWord}</span>
        <span>{restOfTitle}</span>
      </>
    );
  };
  const renderLastWord = (title: string) => {
    const words = title.split(" ");
    const firstPart = words.slice(0, words.length - 1).join(" ");
    const lastWord = words[words.length - 1];
    return (
      <>
        <span>{firstPart} </span>
        <span className="color-primary">{lastWord}</span>{" "}
        {/* Change this color as needed */}
      </>
    );
  };

  return (
    <>
      <div className=" services custom-bg-dark text-center">
        {/* Hero Section */}
        {data.hero.map((hero, index) => (
          <section
            className="service-hero d-flex flex-column justify-content-center align-items-center"
            key={index}
            style={{
              backgroundImage: `url(${hero.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "300px",
              color: "white",
            }}
          >
            <h1 className="">{renderFirstWord(hero.title)}</h1>
            <p className="px-2"> {hero.subTitle}</p>
          </section>
        ))}

        {/* Features Title */}
        <h2 className="text-white mt-5">{renderLastWord(data.title)}</h2>
        <img src={data.icon} alt="" className="m-2" />

        {/* Features Cards */}
        <div className="container mt-3">
          <div className="row align-items-stretch g-3">
            {data.card.map((card, index) => (
              <div className="col-lg-3 col-md-12 my-4 " key={index}>
                <div className="card-siem h-100 custom-bg-light custom-border-bottom">
                  <div className="card-body  py-3">
                    <div className="card-title">
                      <h5 className="color-primary">{card.title}</h5>
                    </div>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body Content */}
        <div className="container mt-5 text-white">
          {data.body.map((body, index) => (
            <section key={index}>
              <h5 className="color-primary py-2">{body.title}</h5>
              {body.desc && <p className="text-left">{body.desc}</p>}
              {body.content && (
                <ul className="list-unstyled">
                  {body.content.map((contentItem, idx) => (
                    <li key={idx}>
                      <p className="">
                        {contentItem.subTitle}
                        {contentItem.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};
