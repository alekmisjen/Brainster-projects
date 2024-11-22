import { useState } from "react";
import { TeamMember } from "../../types/types";
import { Link } from "react-router-dom";

interface MemberDisplayProps {
  position: string;
  members: TeamMember[];
  isEven: boolean;
}

export const MemberDisplay = ({
  position,
  members,
  isEven,
}: MemberDisplayProps) => {
  const [visibility, setVisibility] = useState(2);

  const showMore = () => setVisibility((prev) => prev + 2);
  const showLess = () => setVisibility(2);

  const hasMore = members.length > visibility;
  return (
    <div className={`mb-5 ${isEven ? "bg-dark text-light p-4 " : ""}`}>
      <h2 className={`text-center mb-4 ${isEven ? "text-white" : ""}`}>
        {position}
      </h2>
      <div className="row">
        {members.slice(0, visibility).map((member) => (
          <div
            className="col-md-4 mb-4"
            key={`${member.first_name}-${member.last_name}`}
          >
            <div className={`card ${isEven ? "bg-secondary text-light" : ""}`}>
              <img
                src={member.avatar}
                alt={`${member.first_name} ${member.last_name}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{`${member.first_name} ${member.last_name}`}</h5>
                <p className="card-text">{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-3">
        {hasMore ? (
          <Link
            to="#"
            className="text-primary"
            onClick={(e) => {
              e.preventDefault();
              showMore();
            }}
          >
            Show More
          </Link>
        ) : visibility > 2 ? (
          <Link
            to="#"
            className="text-secondary"
            onClick={(e) => {
              e.preventDefault();
              showLess();
            }}
          >
            Show Less
          </Link>
        ) : null}
      </div>
    </div>
  );
};
