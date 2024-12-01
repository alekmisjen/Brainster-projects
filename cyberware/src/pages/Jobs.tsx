import { Filter } from "../components/Filter/Filter";
import { useTranslation } from "react-i18next";

export const Jobs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className=" job-hero">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-12 text-center">
              <h1 className="hero-title">{t("jobs.title")}</h1>
              <p className="hero-pre-title">{t("jobs.preTitle")}</p>
            </div>
          </div>
        </div>
      </section>
      <Filter />;
    </>
  );
};
