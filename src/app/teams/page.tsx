"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type APIUser = {
  name: { first: string; last: string };
  picture: { large: string };
};

type TeamMember = {
  name: string;
  photo: string;
  role: string;
  bio: string;
};

const roles = [
  "Direktur Utama",
  "Senior Manager",
  "Manager",
  "Supervisor",
  "Supervisor",
  "Manager",
  "Senior Manager",
  "Supervisor",
];

export default function TeamsPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=8");
        const data = await res.json();
        const members = data.results.map(
          (user: APIUser, index: number): TeamMember => ({
            name: `${user.name.first} ${user.name.last}`,
            photo: user.picture.large,
            role: roles[index],
            bio: `Hi, I'm ${user.name.first}, currently working as a ${roles[index]}. I love teamwork and solving problems!`,
          })
        );
        setTeam(members);
      } catch {
        setError("Failed to fetch team data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8">Loading team data...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="flex justify-center font-DM-Serif text-orange text-6xl font-bold mb-2">
        Meet Our Team
      </h1>
      <p className="flex justify-center text-center font-montserrat mb-6 italic">
        Di balik setiap pencapaian, ada kerja keras dan kolaborasi. Kenali lebih
        dekat para profesional yang membentuk perjalanan kami:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {team.map((member, idx) => (
          <div key={idx} className="border rounded-lg shadow p-4 text-center">
            {/* Render Image hanya jika photo ada */}
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-4 object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200" />
            )}

            {/* Render nama hanya jika ada */}
            <h2 className="font-montserrat font-bold text-xl text-black">
              {member.name || "Loading..."}
            </h2>

            <p className="font-montserrat text-sm text-black">
              {member.role || ""}
            </p>

            <p className="font-montserrat mt-2 text-sm text-deep-grey">
              {member.bio || ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
