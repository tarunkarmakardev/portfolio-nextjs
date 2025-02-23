import {
  aboutMe,
  projects,
  skills,
  topBarLinks,
  workExperiences,
} from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Github, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="p-3 text-white max-w-[900px] mx-auto">
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex justify-between items-center gap-2 p-2 bg-primary/80 filter top-0 sticky backdrop-blur-sm border-b border-secondary z-20">
      <div>
        <Logo />
      </div>
      <div className="flex">
        {topBarLinks.map((link) => (
          <TopBarLink key={link.id} id={link.id} text={link.text} />
        ))}
      </div>
    </header>
  );
}

type TopBarLinkProps = {
  text: string;
  id: string;
};

function TopBarLink({ id, text }: TopBarLinkProps) {
  return (
    <a
      href={`#${id}`}
      className="text-white p-2 text-xs sm:p-3 sm:text-base hover:bg-secondary rounded-md"
    >
      {text}
    </a>
  );
}

function Logo() {
  return (
    <div className="h-10 w-10 flex justify-center items-center text-white font-bold text-2xl rounded-full bg-secondary">
      T
    </div>
  );
}

function GradientBackground(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle 180px, rgba(118, 60, 172, 0.4) 0%, rgba(60, 9, 112, 0.7) 60%, rgb(var(--color-primary)) 90%)",
      }}
      {...props}
    />
  );
}

function Hero() {
  const size = {
    width: 200,
    height: 280,
  };
  return (
    <section className="mt-12 mb-12 sm:mt-24">
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <div className="relative">
          <GradientBackground className="px-16 py-4">
            <Image
              src="/me.png"
              alt="me"
              height={size.height}
              width={size.width}
              className=""
            />
          </GradientBackground>
          <div className="absolute text-white text-center text-lg -top-3 translate-x-10 sm:text-2xl sm:translate-x-1/2 text-nowrap">
            Hello I am{" "}
            <span className="text-accent font-bold">Tarun Karmakar</span>
          </div>
        </div>
        <div>
          <div className="underline mb-4">A Developer who</div>
          <div className="text-2xl mb-2">
            Judges a book by its{" "}
            <span className="text-accent font-bold">cover...</span>
          </div>
          <div className="text-xs">
            Because if the cover does not impress you what else can?
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about" className="mb-12 sm:mt-24">
      <div className="text-2xl mb-4">{"I'm a Software Engineer."}</div>
      <div className="text-xs mb-2">
        My recent company was{" "}
        <Link href={aboutMe.recentCompany.url} target="_blank">
          <span className="text-accent underline">
            {aboutMe.recentCompany.text}
          </span>
        </Link>
      </div>
      <div className="text-sm mb-2">{aboutMe.content}</div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="work-experience" className="mb-12">
      <div className="text-2xl mb-4">Work Experience</div>
      <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
        {workExperiences.map((workExperience) => (
          <WorkExperienceCard
            key={workExperience.company}
            description={workExperience.description}
            company={workExperience.company}
            position={workExperience.position}
            duration={workExperience.duration}
          />
        ))}
      </div>
    </section>
  );
}

type WorkExperienceCardProps = {
  company: string;
  position: string;
  duration: string;
  description: string;
};

function WorkExperienceCard({
  company,
  duration,
  position,
  description,
}: WorkExperienceCardProps) {
  return (
    <div
      className="p-4 border border-secondary rounded-md"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,4,40,1) 7%, rgba(37,16,67,1) 34%, rgba(56,18,109,1) 52%, rgba(38,16,69,1) 85%, rgba(25,6,52,1) 99%)",
      }}
    >
      <div className="flex gap-2 items-center">
        <Image
          className="flex-shrink-0"
          src="/work-image.png"
          alt="work-image"
          width={100}
          height={25}
        />
        <div className="flex flex-col gap-2">
          <div className="font-bold font-poppins">{position}</div>
          <div className="text-xs font-poppins">{company}</div>
          <div className="text-xs font-poppins">{duration}</div>
          <div className="text-xs font-poppins">{description}</div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="mb-12">
      <div className="text-2xl mb-4">Skills</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.text} text={skill.text} image={skill.image} />
        ))}
      </div>
    </section>
  );
}

type SkillCardProps = {
  text: string;
  image: string;
};

function SkillCard({ text, image }: SkillCardProps) {
  return (
    <div
      className="p-4 border border-secondary rounded-md"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,4,40,1) 7%, rgba(37,16,67,1) 34%, rgba(56,18,109,1) 52%, rgba(38,16,69,1) 85%, rgba(25,6,52,1) 99%)",
      }}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <Image
          className="flex-shrink-0"
          src={image}
          alt={text}
          width={50}
          height={50}
        />
        <div className="font-bold font-poppins">{text}</div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="text-2xl mb-4">Projects</div>
      <div className="flex flex-col gap-2 sm:gap-16">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.name}
            idx={idx}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  idx: number;
  name: string;
  description: string;
  image: string;
  github: string;
};

function ProjectCard({
  idx,
  name,
  description,
  image,
  github,
}: ProjectCardProps) {
  return (
    <GradientBackground
      className={`sm:flex sm:gap-2 ${
        idx % 2 === 0 ? "sm:flex-row-reverse" : undefined
      }`}
    >
      <div className="flex-1">
        <div className="text-lg mb-4">{name}</div>
        <div
          style={{
            background:
              "radial-gradient(farthest-corner at 700px 700px, rgba(105,59,147,1) 0%, rgba(110,191,244,0.2) 77%, rgba(70,144,212,0.1) 85%)",
          }}
          className="p-6 rounded-md backdrop-blur-lg mb-4 text-sm sm:translate-x-[10%]"
        >
          {description}
        </div>
      </div>
      <div>
        <div className="p-2 rounded-sm w-full h-64 sm:w-96 bg-secondary mb-4">
          <Image
            src={image}
            height={1440}
            width={2886}
            alt={name}
            style={{ height: "100%" }}
          />
        </div>
        <div className="flex gap-2">
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-1 p-3 bg-secondary rounded-md hover:bg-secondary/80"
          >
            <Github />
            Github
            <MoveRight />
          </a>
        </div>
      </div>
    </GradientBackground>
  );
}
