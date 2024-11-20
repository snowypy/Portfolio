export interface Blog {
    id: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    color: string;
  }
  
  export const blogs: Blog[] = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js and how to set up your first project.",
      date: "2023-05-15",
      tags: ["Next.js", "React", "Web Development"],
      color: "#FF6B6B"
    },
    {
      id: "2",
      title: "Advanced TypeScript Techniques",
      description: "Dive deep into TypeScript and learn some advanced techniques to improve your code.",
      date: "2023-06-02",
      tags: ["TypeScript", "JavaScript", "Programming"],
      color: "#4ECDC4"
    },
    {
      id: "3",
      title: "The Power of Framer Motion",
      description: "Explore the capabilities of Framer Motion and how it can enhance your React applications.",
      date: "2023-06-20",
      tags: ["Framer Motion", "React", "Animation"],
      color: "#45B7D1"
    }
  ];