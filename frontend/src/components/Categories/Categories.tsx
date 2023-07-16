import React, { useEffect, useState } from "react";
import moon from "../../static/moon.png";
import styles from './styles/categories.module.sass'
import frontmountains from "../../static/frontmountains.png";
import backmountains from "../../static/backmountains.png";
import AOS from "aos";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../query/category";
import Category from "./Category";
import { styled } from "@mui/material/styles";
import { Backdrop, Button, ButtonProps, Fade, Modal } from "@mui/material";
import ModalCategory from "./ModalCategory";

const Categories = () => {
  const {data, loading, error} = useQuery(GET_ALL_CATEGORIES)
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if(!loading) {
      setCategories(data.getAllCategories)
    }
  }, [data, loading])

  useEffect(() => {
    AOS.init();
  }, [])

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(254 254 254 / 50%);",
    backgroundColor: "rgb(254 254 254 / 100%);",
    color: "#1b011e",
    width: "15vw",
    height: "7vh",
    borderRadius: "100px",
    '&:hover': {
      boxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      webkitBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      mozBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      backgroundColor: "rgb(254 254 254 / 100%);",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  return (
    <div>

      <section data-aos="fade-up" className={styles.section}>
        <img src={moon} alt="" className={styles.Moon} id="moon" />
        <img src={frontmountains} alt="" className={styles.Front} id="frontmountains" />
        <h2 className={styles.Text}>Users List</h2>
        <img src={backmountains} alt="" id="backmountains" />
      </section>

      <div className={styles.DescDiv}>
        <h2 className={styles.TextDesc} data-aos="fade-up">Categories, Date and Name</h2>
      </div>

      <div className={styles.Button}>
        <ColorButton
          variant="contained"
          size="large"
          onClick={handleOpen}>Add category</ColorButton>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className={styles.ModalFather}
      >
          <ModalCategory onClose={handleClose} />
      </Modal>

      <div className={styles.Father}>
        <div className={styles.Border}>
          {categories.map((category:any) => <Category key={category.id} category={category}/>)}
        </div>
      </div>

    </div>
  );
};

export default Categories;
