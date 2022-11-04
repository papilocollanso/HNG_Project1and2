import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";

const Main = () => {
  const linkData = [
    {
      id: "btn__twitter",
      text: "Twitter Link",
      href: "https://twitter.com/papilocollanso",
    },
    {
      id: "btn__zuri",
      text: "Zuri Team",
      href: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Zuri Books",
      href: "http://books.zuri.team",
    },
    {
      id: "book__python",
      text: "Python Books",
      href: "http://books.zuri.team/python-for-beginners?ref_id=prosper_collins",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      href: "https://background.zuri.team",
    },
    {
      id: "book__design",
      text: "Design Books",
      href: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <section>
      {linkData.map(({ id, text, href }) => (
        <a key={text} href={href} target="_blank" id={id} className="btn">
          {text}
        </a>
      ))}

      <Link to="/contact" className="btn" id="contact">
        Contact Me
      </Link>

      <div className="other-links">
        <a href="#">
          <img src={slackIcon} alt="Slack Icon" />
        </a>
        <a href="#">
          <img src={githubIcon} alt="Github Icon" />
        </a>
      </div>
    </section>
  );
};

export default Main;
