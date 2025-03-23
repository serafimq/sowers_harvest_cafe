'use client';

import TeamMember from './TeamMember';
import { teamMembers } from '@/data/teamMembers';

// Расширяем интерфейс из data/teamMembers.ts
interface TeamMemberData extends Omit<typeof teamMembers[0], 'isDirector'> {
  isDirector?: boolean;
}

interface TeamLayoutProps {
  members: TeamMemberData[];
}

const TeamLayout = ({ members }: TeamLayoutProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamLayout; 