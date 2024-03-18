import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import group from "../../assets/images/group_1.jpg";
import "./about.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="text">
        <Heading className="about-title">About</Heading>
        <BodyText className="about-body">
          The goal of AI NU is to transform the landscape of artificial
          intelligence at Northeastern University and beyond. Our mission
          encompasses various facets, placing a central emphasis on serving as a
          valuable resource to enhance understanding and knowledge about
          artificial intelligence.
        </BodyText>
      </div>
      <img src={group} alt="AINU Logo" className="about-image" />
    </div>
  );
};

export { About };
