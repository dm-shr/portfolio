export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Kapital",
    year: 2024,
    description: "Smart AI-powered interface to chat over the financial reportings",
    url: "https:/kapital-assistant.vercel.app/",
  },
  {
    title: "Tech Salary Prediction",
    year: 2025,
    description: "ML service to predict the salary of tech professionals",
    url: "https://tech-salary-prediction.vercel.app/",
  },
];
