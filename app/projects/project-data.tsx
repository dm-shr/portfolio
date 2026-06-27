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
    description: "Agentic interface to chat over the financial reports",
    url: "https://github.com/dm-shr/kapital-assistant/",
  },
  {
    title: "IT Industry Salary Prediction",
    year: 2025,
    description: "ML service to predict the salary of IT professionals",
    url: "https://github.com/dm-shr/tech-salary-prediction/",
  },
];
