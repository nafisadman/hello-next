import StoryCard from "@/components/StoryCard";
import Title from "@/components/Title";
import React from "react";

const Stories = () => {
  const devStories = [
    {
      id: 3,
      name: "Alex Chen",
      designation: "Backend Engineer",
      company: "DataStream Solutions",
      experience: "6 years",
      skills: ["Python", "Django", "PostgreSQL", "AWS", "Redis"],
      story:
        "Alex transitioned from data analysis to engineering after realizing he loved building the pipelines more than reading the reports.",
      about:
        "A systems architect focused on high-performance database design and cloud infrastructure optimization.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      designation: "Frontend Specialist",
      company: "Pixel Perfect UI",
      experience: "3 years",
      skills: ["Vue.js", "TypeScript", "Tailwind CSS", "Figma", "Nuxt.js"],
      story:
        "Elena's background in graphic design allows her to bridge the gap between complex mockups and functional, accessible code.",
      about:
        "Passionate about creating fluid user interfaces and maintaining strict design system consistency.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 5,
      name: "Jordan Smith",
      designation: "DevOps Engineer",
      company: "CloudNative Ops",
      experience: "5 years",
      skills: ["Kubernetes", "Terraform", "Jenkins", "Go", "Azure"],
      story:
        "Jordan started as a Linux sysadmin and evolved into a DevOps lead during the industry's shift toward containerization.",
      about:
        "Expert in automating CI/CD pipelines and managing multi-region cloud deployments for enterprise scale.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 6,
      name: "Maya Patel",
      designation: "Mobile App Developer",
      company: "AppVentures",
      experience: "2 years",
      skills: ["React Native", "Firebase", "GraphQL", "Swift", "Redux"],
      story:
        "After building a viral fitness app during a weekend hackathon, Maya decided to pursue mobile development full-time.",
      about:
        "Dedicated to building cross-platform mobile experiences that feel truly native and performant.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 7,
      name: "Liam O'Connor",
      designation: "Software Engineer",
      company: "NextGen FinTech",
      experience: "8 years",
      skills: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "Docker"],
      story:
        "Liam spent his early career in banking software, mastering the art of building secure and highly available financial systems.",
      about:
        "A seasoned engineer who excels at troubleshooting complex distributed systems and mentoring junior developers.",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
    },
  ];

  return (
    <div>
      <Title>Explore stories of developers</Title>
      <div>
        {devStories.map((story) => (
          <StoryCard key={story.id} story={story}></StoryCard>
        ))}
      </div>
    </div>
  );
};

export default Stories;
