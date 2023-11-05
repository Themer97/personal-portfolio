import Image from "next/image";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import styles from "./About.module.scss";

import design from "../../assets/design.png";

const About = () => {
  return (
    <div className={`section ${styles.about_container}`} id="about">
      <div className={styles.about}>
        <h1 className={styles.about_title}>Welcome to my portfolio.</h1>
        <span className={styles.description}>
          My name is Themer Saanouni and I&apos;m a front-end developer with a
          background in land surveying and geomatics engineering.
        </span>
        <p className={styles.advantages}>
          <BiSolidQuoteAltLeft />
          As a Front-end Developer with a background in Land Surveying and
          Geomatics Engineering, I bring a unique blend of technical expertise
          and spatial awareness to the digital realm.
          <BiSolidQuoteAltRight />
        </p>
      </div>
      <Image
        src={design}
        alt="design"
        className={styles.about_container_design}
      />
    </div>
  );
};

export default About;
