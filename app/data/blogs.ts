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
      title: "How to build a portfolio website with Next.js",
      description: "Learn how to build a portfolio website with Next.js and TypeScript.",
      date: "11/20/2024",
      tags: ["Next.js", "TypeScript", "React", "Web Development"],
      color: "#FF6B6B"
    }
  ];