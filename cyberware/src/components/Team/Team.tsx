import { useState } from "react";
import { RightArrowIcon } from "../../assets/icons/Arrow";
import { TeamMember } from "../../types/types";
import { Button } from "../Button/Button";
import Modal from "../Modal/Modal";
import { LeftArrowIcon } from "../../assets/icons/LeftArrow";
import { Link } from "react-router-dom";

interface TeamProps {
  data: TeamMember[];
}

export const Team = ({ data }: TeamProps) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="section">
        <div className="container text-center">
          <div className="row">
            {data
              .filter((member) => member.position === "Founders")
              .map((member, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mb-5 mt-5">
                  <div className="card bg-dark border-0">
                    <img
                      className="card-img-top"
                      src={member.avatar}
                      alt="team-member"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {member.first_name} {member.last_name}
                      </h4>
                      <div className="d-flex justify-content-between color-primary">
                        <span>{member.desc}</span>
                      </div>
                      <Button
                        label=""
                        size="round"
                        icon={<RightArrowIcon />}
                        handleOnClick={() => openModal(member)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Link to="/about" className="">
            Meet the rest of the team
          </Link>
        </div>
      </section>

      {selectedMember && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 p-3">
              <div className="modal-left">
                <img
                  className="modal-avatar g-0"
                  src={selectedMember.avatar}
                  alt="avatar"
                />
                <h4 className="modal-title">
                  {selectedMember.first_name} {selectedMember.last_name}
                </h4>
                <span className="modal-desc">{selectedMember.desc}</span>
                <Button
                  label=""
                  size="round"
                  icon={<LeftArrowIcon />}
                  handleOnClick={() => closeModal()}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 p-3">
              <h6 className="bio-title">Bio</h6>
              <p className="modal-bio">
                {selectedMember.bio ||
                  `Furkan Bajrami is a cybersecurity expert with over a decade of experience in safeguarding organizations. He holds a Master's degree in Cybersecurity and certifications such as CISSP and CEH. Furkan frequently conducts workshops and raises awareness about cyber threats and best practices.`}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
