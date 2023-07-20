import BoltIcon from '@mui/icons-material/Bolt';
import BrushIcon from '@mui/icons-material/Brush';
import WebhookIcon from '@mui/icons-material/Webhook';
import { Card, CardContent, Typography } from '@mui/material';
import AOS from 'aos';
import React, { useEffect } from 'react';

import styles from './styles/name.module.sass';

const Description = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Father}>
      <div>
        <h1 className={styles.Text}>Stefan Samokhval</h1>
      </div>

      <div className={styles.BorderFather}>
        <div className={styles.Border}>
          <div className={styles.SecondBorder}>
            <div>
              <div className={styles.TextDiv} data-aos="fade-right">
                <h3 className={styles.TextBorder}>Test project</h3>
              </div>
              <div className={styles.DescriptionDiv} data-aos="fade-right">
                <p className={styles.Description}>
                  With this project, I want to show that I can learn and work
                  with what I did not know. I also want to show that I can and
                  practice creating beautiful "parallax" sites that take your
                  breath away.
                </p>
              </div>
            </div>

            <div>
              <div className={styles.DesignDiv} data-aos="fade-left">
                <h3 className={styles.Design}>Design</h3>
              </div>
              <div className={styles.DescriptionDivDesign} data-aos="fade-left">
                <p className={styles.DescriptionDesign}>
                  I used the design of the site in calm and ordinary colors. I'm
                  not a great designer, but I have a passion for it. I like to
                  create something beautiful and new
                </p>
              </div>
            </div>

            <div>
              <div className={styles.TextDiv} data-aos="fade-right">
                <h3 className={styles.TextBorder}>Clean code</h3>
              </div>
              <div className={styles.DescriptionDiv} data-aos="fade-right">
                <p className={styles.Description}>
                  I can make a few mistakes in clean code, it may not look very
                  clean, but I am constantly learning and practicing. I accept
                  my mistakes and try to fix them
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.Cards}>
              <div>
                <div data-aos="fade-down">
                  <div className={styles.Card}>
                    <Card
                      sx={{ width: 220 }}
                      style={{
                        borderRadius: '5%',
                        backgroundColor: '#2c0130',
                        paddingBottom: '10vh',
                      }}
                    >
                      <CardContent>
                        <WebhookIcon
                          style={{
                            paddingBottom: '5vh',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'left',
                            fontSize: '3rem',
                          }}
                        />
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="white"
                          className={styles.CardText}
                        >
                          Responisve
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#cccccc"
                          className={styles.CardText}
                        >
                          I'm trying to make a responsive front-end so that
                          users from anywhere in the world, on any gadget, can
                          easily use the site
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div data-aos="fade-up">
                  <div className={styles.Card}>
                    <Card
                      sx={{ width: 220 }}
                      style={{
                        borderRadius: '5%',
                        backgroundColor: '#2c0130',
                        paddingBottom: '10vh',
                      }}
                    >
                      <CardContent>
                        <BoltIcon
                          style={{
                            paddingBottom: '5vh',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'left',
                            fontSize: '3rem',
                          }}
                        />
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="white"
                          className={styles.CardText}
                        >
                          Faster
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#cccccc"
                          className={styles.CardText}
                        >
                          I'm trying to make the backend work faster so that
                          users don't have to reload or wait for content on the
                          page for a long time
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <div className={styles.CenteredCard} data-aos="fade-left">
                <Card
                  sx={{ width: 220 }}
                  style={{
                    borderRadius: '5%',
                    backgroundColor: '#2c0130',
                    paddingBottom: '10vh',
                  }}
                >
                  <CardContent>
                    <BrushIcon
                      style={{
                        paddingBottom: '5vh',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'left',
                        fontSize: '3rem',
                      }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="white"
                      className={styles.CardText}
                    >
                      Simplicity
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#cccccc"
                      className={styles.CardText}
                    >
                      I'm trying to make a project so simple for the user that
                      he doesn't need to do anything perfect in the application
                      at all.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
