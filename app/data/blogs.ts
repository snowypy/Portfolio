import superstudyImage from '@/public/blog1-img1.png';

export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  color: string;
  content: Array<{ type: "paragraph" | "image" | "heading"; value: string }>;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Why the new portfolio?",
    description: "Explore why I've built this new portfolio.",
    date: "11/25/2024",
    tags: ["Next.js", "TypeScript", "React", "Web Development"],
    color: "#6b8ff7",
    content: [
      {
        type: "image",
        value: superstudyImage.src,
      },
      {
        type: "heading",
        value: "What is High Seas?",
      },
      {
        type: "paragraph",
        value: "High Seas is a coding bootcamp for developers interested in building web applications. It offers a code for reward based model depending on the number of hours and community support.", 
      },
      {
        type: "heading",
        value: "Why make a WHOLE new one?",
      },
      {
        type: "paragraph",
        value: "I wanted to create a portfolio that showcased my skills and experiences in a unique way. I also wanted to explore new technologies as I have not used React in ages.",
      },
      {
        type: "heading",
        value: "What more will you see?",
      },
      {
        type: "paragraph",
        value: "Expect to see more updates on my portfolio, blog, and other projects. Stay tuned!",
      },
    ],
  },
];