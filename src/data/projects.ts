export type Project = {
  id: number;
  title: string;
  category: 'Residential';
  image: string;
  images?: string[];
  location: string;
  duration: string;
  team: string;
  description: string;
  status: 'In Progress' | 'Completed';
  brochureUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: '3BHK Luxurious Prajakta Park (Abhyankar Nagar)',
    category: 'Residential',
    image: '/images/Prajktapark.png',
    images: ['/images/Prajktapark.png', '/images/carazol5.JPG', '/images/carazol6.JPG'],
    location: 'Abhyankar Nagar, Nagpur',
    duration: '12 months',
    team: '20 members',
    description:
      "Introducing 'PRAJAKTA PARK', our 5 level 3BHK luxurious park view apartment located in the lap of nature. A peaceful location in the heart of the city where you can enjoy your mornings with blissful greenery. A Perfect Home with Modern Amenities at Abhyankar Nagar, Nagpur.",
    status: 'In Progress',
    brochureUrl: '/images/brochure.pdf',
  },
  {
    id: 2,
    title: '3BHK Luxurious Prajakta La-Masion',
    category: 'Residential',
    image: '/images/secondProject.jpg',
    images: ['/images/secondProject.jpg'],
    location: 'Nagpur',
    duration: '14 months',
    team: '22 members',
    description:
      "Introducing 'PRAJAKTA La-Masion', our 5 level 3BHK luxurious view apartment located in the lap of nature. A peaceful location in the heart of the city where you can enjoy your mornings with blissful greenery. A Perfect Home with Modern Amenities at Nagpur.",
    status: 'In Progress',
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}


