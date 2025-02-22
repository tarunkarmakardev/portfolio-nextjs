import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="p-2 text-white max-w-[900px] mx-auto">
        <Hero />
        <AboutMe />
        <WorkExperience />
      </main>
    </div>
  );
}

const topBarLinks = [
  {
    id: "work-experience",
    text: "Work Experience",
  },
  {
    id: "skills",
    text: "Skills",
  },
  {
    id: "projects",
    text: "Projects",
  },
  {
    id: "contact",
    text: "Contact",
  },
];

function TopBar() {
  return (
    <header className="flex justify-between items-center gap-2 p-2 bg-primary/80 filter top-0 sticky backdrop-blur-sm border-b border-secondary z-20">
      <div>
        <Logo />
      </div>
      <div className="flex gap-2">
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
    <a href={`#${id}`} className="text-white px-4 text-sm">
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

function Hero() {
  const size = {
    width: 300,
    height: 300,
  };
  return (
    <section className="mt-24 mb-4">
      <div className="flex items-center gap-2 p-2">
        <div
          className="rounded-full relative"
          style={{
            background:
              "radial-gradient(circle 150px, rgba(118, 60, 172, 0.4) 0%, rgba(60, 9, 112, 0.7) 60%, rgb(var(--color-primary)) 90%)",
            ...size,
          }}
        >
          <Image
            src="/me.png"
            alt="me"
            height={size.height - size.height * 0.2}
            width={size.width - size.width * 0.5}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute text-white text-center text-2xl top-4 translate-x-60 text-nowrap">
            Hello I am{" "}
            <span className="text-accent font-bold">Tarun Karmakar</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="underline">A Developer who</div>
          <div className="text-2xl">
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
    <section id="about" className="mb-20">
      <div className="text-2xl mb-6">{"I'm a Software Engineer."}</div>
      <div className="text-xs">
        My recent company was{" "}
        <Link href="https://www.thedataplant.com/" target="_blank">
          <span className="text-accent underline">Dataplant</span>
        </Link>
      </div>
      <div className="text-sm mt-6">
        A self-taught frontend developer, functioning in the industry nearly 4
        years now. I make meaningful and delightful digital products that create
        an equilibrium between user needs and business goals.
      </div>
    </section>
  );
}

const workExperiences = [
  {
    company: "Dataplant Inc",
    position: "UI Developer",
    duration: "May 2022 - Present",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic, repellat corrupti quas maxime ad facilis possimus dolores sit rerum.",
  },
  {
    company: "Get Thrifty",
    position: "Software Developer",
    duration: "Feb 2022 - May 2022",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic, repellat corrupti quas maxime ad facilis possimus dolores sit rerum.",
  },
  {
    company: "Null Innovation",
    position: "Junior Frontend Engineer",
    duration: "June 2021 - Feb 2022",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic, repellat corrupti quas maxime ad facilis possimus dolores sit rerum.",
  },
];

function WorkExperience() {
  return (
    <section id="work-experience">
      <div className="text-2xl mb-6">Work Experience</div>
      <div className="grid grid-cols-2 gap-4">
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
        <div className="flex flex-col gap-1">
          <div className="font-bold font-poppins">{position}</div>
          <div className="text-xs font-poppins">{company}</div>
          <div className="text-xs font-poppins">{duration}</div>
          <div className="text-xs font-poppins">{description}</div>
        </div>
      </div>
    </div>
  );
}
