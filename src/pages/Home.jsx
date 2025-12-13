import React from "react";
import Hero from "../layout/Hero";
import ProjectShow from "../layout/ProjectShow";
import Silderimg from "../components/ui/Silderimg";
import Verification from "../components/Verification";
import TextGrid from "../components/ui/TextGrid";
import AnimatedProject from "../components/AnimatedProject";
import { ArrowSvg, EmojiSvg, MailSvg, MoonSvg, RocketSvg, TextSvg } from "../components/PersonSvg";

const HeadingContent = "All your time consuming emails, handled by Headroom";

const HeadingContentTwo = "Your workflows, tailored to your business needs";

const BoxContent = [
  {
    TopIcon: <ArrowSvg />,
    Title: "Headroom quickly takes action for you, because humans are slow",
  },
  {
    TopIcon: <MailSvg />,
    Title:
      "Headroom tracks, follows up, and closes the loop while you do important stuff",
  },
  {
    TopIcon: <MoonSvg />,
    Title:
      " Rest easy knowing your business actually works without you for once",
  },
];
const BoxContentTwo = [
  {
    TopIcon: <TextSvg />,
    Title: "Describe your business processes to Headroom's AI assistant",
  },
  {
    TopIcon: <RocketSvg />,
    Title: "We build custom AI-powered software in seconds",
  },
  {
    TopIcon: <EmojiSvg />,
    Title: " Leverage our powerful agents to automate your work",
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectShow />
      <Silderimg />
      <Verification />
      <TextGrid items={BoxContent} heading={HeadingContent} />
      <AnimatedProject />
      <TextGrid items={BoxContentTwo} heading={HeadingContentTwo} />
    </div>
  );
};

export default Home;
