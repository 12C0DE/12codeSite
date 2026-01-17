import { getYears } from "../../utils";

export const skills = [
  {
    name: "Figma",
    color: "#A259FF",
    desc: "Design and prototyping tool",
    icon: "figma",
    experience: 3,
    use: "Moodboards, Design, Prototyping",
    years: getYears(2023),
    type: "Design Tool",
  },
  {
    name: "AWS",
    color: "#232F3E",
    accentColor: "#FF9900",
    desc: "Cloud computing platform for building scalable, highly available serverless infrastructure",
    icon: "aws",
    experience: 4,
    use: "Serverless Lambdas, APIs, DynamoDB, s3, SES",
    years: getYears(2021),
    type: "Cloud Computing",
  },
  {
    name: "Databases",
    color: "#4479A1",
    desc: "SQL and NoSQL database systems for structured and flexible data management",
    icon: "database",
    experience: 4,
    use: "SQL, PL/SQL, MySQL, DynamoDB, MongoDB",
    years: getYears(2017),
    type: "Data Storage",
  },
  {
    name: ".NET",
    color: "#512BD4",
    desc: "Microsoft framework for building cross-platform applications and web services",
    icon: "dotnet",
    experience: 3,
    use: "C#, ASP.NET, Web APIs, Backend Services",
    years: getYears(2022),
    type: "Framework",
  },
  {
    name: "Full-Stack JavaScript",
    color: "#F7DF1E",
    desc: "Primary programming languages for full-stack development",
    icon: "js",
    experience: 5,
    use: "Frontend, Backend (Node.js), APIs, TypeScript",
    years: getYears(2019),
    type: "Programming Language",
  },
  {
    name: "React",
    color: "#61DBFB",
    desc: "UI JavaScript library specializing in building reusable components for simple to complex interfaces",
    experience: 5,
    use: "UI, Web Development, Mobile app development",
    years: getYears(2018),
    type: "Software",
    icon: "react",
  },
];

// - React
// - React Native
//     - expo go
// - SQL
// - NoSQL
// - AWS
// - Figma
// - Javascript
// - Typescript
// - .Net
