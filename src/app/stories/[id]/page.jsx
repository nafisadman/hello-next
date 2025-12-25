import React from "react";

const StoryDetailsPage = async ({ params }) => {
  const { id } = await params;
  const devStories = [
    {
      id: 3,
      name: "Alex Chen",
      designation: "Backend Engineer",
      company: "DataStream Solutions",
      experience: "6 years",
      skills: ["Python", "Django", "PostgreSQL", "AWS", "Redis"],
      singleStory:
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
      singleStory:
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
      singleStory:
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
      singleStory:
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
      singleStory:
        "Liam spent his early career in banking software, mastering the art of building secure and highly available financial systems.",
      about:
        "A seasoned engineer who excels at troubleshooting complex distributed systems and mentoring junior developers.",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
    },
  ];

  const singleStory = devStories.find((singleStory) => singleStory.id == id);
  if (!singleStory) {
    return <h2>singleStory not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Top Banner Area */}
        <div className="h-32 bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600 bg-indigo-500"></div>

        <div className="relative px-8 pb-12">
          {/* Profile Image (Overlapping the banner) */}
          <div className="relative -mt-16 mb-6">
            <img
              className="h-32 w-32 rounded-2xl object-cover border-4 border-white shadow-lg"
              src={singleStory.image}
              alt={singleStory.name}
            />
          </div>

          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                {singleStory.name}
              </h1>
              <p className="text-xl font-medium text-indigo-600 mt-1">
                {singleStory.designation} at {singleStory.company}
              </p>
              <div className="flex items-center gap-4 mt-4 text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {singleStory.experience} Exp
                </span>
              </div>
            </div>

            {/* Quick Stats/Actions */}
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 px-6 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg">
                Contact {singleStory.name.split(" ")[0]}
              </button>
              <button
                // onClick={() => window.history.back()}
                className="w-full py-3 px-6 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition"
              >
                ← Back to Stories
              </button>
            </div>
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Journey
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
                  "{singleStory.singleStory}"
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {singleStory.about}
                </p>
              </section>
            </div>

            {/* Sidebar: Skills */}
            <div className="bg-gray-50 p-6 rounded-2xl h-fit">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {singleStory.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-semibold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsPage;
