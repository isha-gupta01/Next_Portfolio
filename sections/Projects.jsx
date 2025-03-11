import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Twitter Clone",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://twitter-clone-tweets.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Freelanced",
    year: "2025",
    title: "Food Prescription",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://food-cription.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Freelanced",
    year: "2025",
    title: "GHE Academy",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.greenheavenacademy.in/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I tranformed concepts into engaging digital experiences."/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card key={project.projectIndex} className="  px-8 pt-8 md:pt-12 pb-0  md:px-10  lg:pt-16 lg:px-20 sticky" 
            style={{
              top:`calc(64px + ${projectIndex * 40}px)`
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text " >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif md:text-4xl md:mt-5  text-2xl mt-2 ">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 md:mt-5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result,index) => (
                      <li key={index}  className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex gap-2 items-center justify-center mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4  " />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} width={500} height={500} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};

