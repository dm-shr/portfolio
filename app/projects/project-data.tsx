export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Kapital Assistant",
    year: 2024,
    description: "Smart AI-powered interface to chat over the financial reports",
    url: "https://kapital-assistant.vercel.app/",
  },
  {
    title: "IT Industry Salary Prediction",
    year: 2025,
    description: "ML service to predict the salary of IT professionals",
    url: "https://tech-salary-prediction.vercel.app/",
  },
];
