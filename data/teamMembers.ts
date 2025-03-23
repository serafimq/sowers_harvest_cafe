interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Yan Rosenthal",
    role: "CEO",
    description: "Experienced leader with more than 10 years in the restaurant business. Creates innovative concepts and development strategies, ensuring the highest quality of customer service.",
    imageUrl: "/team/1.webp"
  },
  {
    id: "2",
    name: "Alex Steinberg",
    role: "Head Chef",
    description: "Culinary arts master with international experience. Specializes in combining traditional techniques with modern approaches, creating unique flavor compositions.",
    imageUrl: "/team/2.webp"
  },
  {
    id: "3",
    name: "Noah Cohen",
    role: "Sous Chef",
    description: "Creative culinary professional with a deep understanding of flavor combinations. Responsible for daily kitchen operations and ensuring the quality of each dish.",
    imageUrl: "/team/1.webp"
  },
  {
    id: "4",
    name: "Jacob Goldstein",
    role: "Operations Director",
    description: "Expert in process optimization and resource management. Ensures the smooth operation of the restaurant and a high level of service for guests.",
    imageUrl: "/team/2.webp"
  },
  {
    id: "5",
    name: "Ilan Katz",
    role: "Pastry Chef",
    description: "Virtuoso dessert master with a unique creative vision. Creates exquisite sweets that become a true decoration of our menu.",
    imageUrl: "/team/1.webp"
  },
  {
    id: "6",
    name: "Naomi Burke",
    role: "Marketing Manager",
    description: "Specialist in promotion and public relations. Develops and implements strategies that attract new customers and strengthen the loyalty of regular guests.",
    imageUrl: "/team/2.webp"
  },
  {
    id: "7",
    name: "Dan Levy",
    role: "Administrator",
    description: "Hospitality professional who provides a pleasant experience for each guest. Coordinates staff work and resolves all issues in the dining area.",
    imageUrl: "/team/1.webp"
  },
  {
    id: "8",
    name: "Rivka Feldman",
    role: "Sommelier",
    description: "Wine expert with extensive knowledge and refined taste. Helps guests choose the perfect combination of drinks to accompany our menu items.",
    imageUrl: "/team/2.webp"
  }
]; 