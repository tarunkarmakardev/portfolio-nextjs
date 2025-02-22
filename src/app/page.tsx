import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="p-2 text-white max-w-[600px] mx-auto">
        <Hero />
        <AboutMe />
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
    <header className="flex justify-between items-center gap-2 p-2 bg-primary/80 filter top-0 sticky backdrop-blur-sm border-b border-secondary">
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
    <section>
      <div className="text-2xl">{"I'm a Software Engineer."}</div>
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
