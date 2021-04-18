export const CONFIG: {
  social: { name: string; color: string; url: string; logo?: string }[];
  github: {
    username: string;
    colors: { title: string; text: string; icon: string; background: string };
    stats: { mostUsedLanguages: boolean; overallStats: boolean };
    highlightedRepositories: string[];
  };
  instagram: { enabled: boolean; username: string; numberOfImages: number };
  mediumArticles: {
    enabled: boolean;
    username: string;
    numberOfArticles: number;
  };
  badges: {
    enabled: boolean;
    spectrum: string[];
    list: { name: string; logo?: string }[];
  };
} = {
  social: [
    {
      name: "Medium",
      color: "12100E",
      url: "https://medium.com/@luuis",
    },
    {
      name: "GitHub",
      color: "12100E",
      url: "https://github.com/luuis",
    },
    {
      name: "Twitter",
      color: "1DA1F2",
      url: "https://twitter.com/ImLuuisE",
    },
    {
      name: "LinkedIn",
      color: "0077B5",
      url: "https://www.linkedin.com/in/luuis",
    },
    {
      name: "Instagram",
      color: "E4405F",
      url: "https://www.instagram.com/luuis.e",
    },
  ],
  github: {
    username: "luuis",
    colors: {
      title: "181636",
      text: "181636",
      icon: "e7bd88",
      background: "ffffff",
    },
    stats: {
      mostUsedLanguages: true,
      overallStats: true,
    },
    highlightedRepositories: [],
  },
  instagram: {
    enabled: false,
    username: "luuis.e",
    numberOfImages: 3,
  },
  mediumArticles: {
    enabled: false,
    username: "luuis",
    numberOfArticles: 10,
  },
  badges: {
    enabled: true,
    spectrum: ["46a2f1", "311C87", "DD0031", "43853d"],
    list: [
      {
        name: "React",
      },
      {
        name: "Angular",
      },
      {
        name: "Vue",
        logo: "vue.js",
      },
      {
        name: "Webpack",
      },
      {
        name: "TypeScript",
      },
      {
        name: "JavaScript",
      },
      {
        name: "jQuery",
      },
      {
        name: "Sass",
      },
      {
        name: "PostCSS",
      },
      {
        name: "Laravel",
      },
      {
        name: "PHP",
      },
      {
        name: "VS Code",
      },
      {
        name: "Adobe XD",
      },
      {
        name: "Adobe Photoshop",
      },
      {
        name: "Adobe Illustrator",
      },
      {
        name: "Discord",
      },
      {
        name: "Insomnia",
      },
      {
        name: "Git",
      },
      {
        name: "Github",
      },
      {
        name: "npm",
      },
      {
        name: "HTML5",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "MongoDB",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "MySQL",
      },
      {
        name: "Prettier",
      },
      {
        name: "NodeJS",
        logo: "Node.js",
      },
    ],
  },
};
