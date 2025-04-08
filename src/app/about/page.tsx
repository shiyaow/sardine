import { Lily_Script_One, Geist } from "next/font/google";

const lilyScriptOne = Lily_Script_One({
  subsets: ["latin"],
  weight: ["400"],
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <>
      <header className={lilyScriptOne.className}>About this website</header>
      <main>
        <p className={geist.className}>
          This is a website about a website. It is a website about a website. It
          is a website about a website.
        </p>
      </main>
    </>
  );
};

About.displayName = "About";

export default About;
