import { TeamMember } from "../../types/types";
import data from "../../db.json";
import { MemberDisplay } from "./MemberDisplay";

export const TeamMemberSection = () => {
  const teamMember: TeamMember[] = data.team;

  const groupTeam = teamMember.reduce<Record<string, TeamMember[]>>(
    (acc, member) => {
      if (!acc[member.position]) {
        acc[member.position] = [];
      }
      acc[member.position].push(member);
      return acc;
    },
    {}
  );

  return (
    <div className="container-fluid my-5">
      {Object.entries(groupTeam).map(([position, members], index) => (
        <MemberDisplay
          key={position}
          isEven={index % 2 === 1}
          position={position}
          members={members}
        />
      ))}
      ;
    </div>
  );
};
