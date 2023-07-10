import React from "react";
import frontmountains from '../../static/frontmountains.png'
import backmountains from '../../static/backmountains.png'
import moon from '../../static/moon.png'
import stars from '../../static/stars.png'
import styles from './styles/sections.module.sass'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Sections = () => {

  return (
      <section className={styles.section}>
        <Parallax pages={1.1} style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0.3} speed={2}>
            <div>
              <img src={moon} alt="" className={styles.Moon} id="moon" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.5}>
            <div>
              <img src={stars} alt="" id="stars" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={-0.95}>
          <div>
            <img src={frontmountains} alt="" className={styles.Front} id="frontmountains" />
          </div>
          </ParallaxLayer>

          <ParallaxLayer speed={-0.95}>
          <div>
            <img src={backmountains} alt="" id="backmountains" className={styles.Mountains} />
          </div>
          </ParallaxLayer>
        </Parallax>
      </section>
  );
};

export default Sections;
