import React, { useEffect } from "react";
import styles from './styles/login.module.sass'
import moon from "../../static/moon.png";
import frontmountains from "../../static/frontmountains.png";
import fw from '../../static/firewatch.webp'
import { Button, ButtonProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import { useFormik } from "formik";
import { LoginValidationSchema } from "./validators/login.validator";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../mutations/user";

const Login = () => {
  const [loginUser] = useMutation(LOGIN_USER)
  const navigate = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgba(0, 250, 255, 0.3)",
    backgroundColor: "rgba(0, 250, 255, 0.21)",
    color: "#1b011e",
    width: "15vw",
    height: "6vh",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1);",
    backdropFilter: "blur(4.2px);",
    webkitBackdropFilter: "blur(4.2px);",
    '&:hover': {
      boxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      webkitBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      mozBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      backgroundColor: "rgba(0, 250, 255, 0.3)",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  useEffect(() => {
    AOS.init();
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await loginUser({
          variables: {
            email: values.email,
            password: values.password,
          },
        });

        localStorage.setItem('access', data.login.access);
        localStorage.setItem('refresh', data.login.refresh);

        navigate('/users')
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <section className={styles.section}>
        <img src={moon} alt="" className={styles.Moon} id="moon" data-aos="zoom-in" data-aos-duration="1000" />
        <div className={styles.Border} data-aos="zoom-in" data-aos-duration="3000">

          <div>

            <div>
              <img src={fw} alt="" className={styles.Img} />
            </div>

            <div>
              <div className={styles.LoginDiv}>
                <h1 className={styles.Text}>Login</h1>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className={styles.Mother}>
                  <div className={styles.Input}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>

                  <div className={styles.Input}>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </div>
                </div>

                <div className={styles.Button}>
                  <ColorButton variant="contained" size="medium"  type="submit">Login</ColorButton>
                </div>

              </form>
            </div>

            <div className={styles.Register}>
              <p className={styles.TextReg}>
                Don't have an account?
                <NavLink to={'/register'} className={styles.Link}>Register</NavLink>
              </p>
            </div>

          </div>

        </div>
        <img src={frontmountains} alt="" className={styles.Front} id="frontmountains" />
      </section>
    </div>
  );
};

export default Login;
