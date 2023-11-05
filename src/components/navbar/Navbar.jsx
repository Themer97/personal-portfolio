import { useEffect } from 'react';

import { BsArrowUpRight } from 'react-icons/bs';

import styles from './Navbar.module.scss';

const Navbar = () => {
  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    const handleScroll = () => {
      const offset = 150;
      const top = window.scrollY;

      sections.forEach((sec) => {
        const secTop = sec.offsetTop - offset;
        const secHeight = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= secTop && top < secTop + secHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className={styles.logo_first_name}>THEMER</h1>
        <h1 className={styles.logo_last_name}>SN</h1>
      </div>
      <ul className={styles.navbar_items}>
        <li className={styles.navbar_items_item}>
          <a href='#about'>About</a>
        </li>
        <li className={styles.navbar_items_item}>
          <a href='#skills'>Skills</a>
        </li>
        <li className={styles.navbar_items_item}>
          <a href='#projects'>Projects</a>
        </li>
        <li className={styles.navbar_items_item}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <button>
        home page <BsArrowUpRight />
      </button>
    </div>
  );
};

export default Navbar;
