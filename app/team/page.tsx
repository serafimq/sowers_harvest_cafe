'use client';

import { teamMembers } from '@/data/teamMembers';
import TeamLayout from '@/components/features/team/TeamLayout';

export default function TeamPage() {
  const enhancedTeamMembers = teamMembers.map(member => ({
    ...member,
    isDirector: member.role === 'CEO'
  }));

  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden">
      <div className='py-28 bg-hero'>
        <h1 className="text-3xl font-bold text-center py-12 text-white">Our team</h1>
        <TeamLayout members={enhancedTeamMembers} />
      </div>
    </main>
  );
}
