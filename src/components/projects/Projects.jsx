import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

import styles from './Projects.module.scss';

import unidrive from '../../assets/unidrive.png';
import background from '../../assets/grey-sand.jpg';

const Projects = () => {
  return (
    <div className='section' id='projects'>
      <Swiper
        className={styles.swiper}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
      >
        <div
          slot='container-start'
          className={styles.parallax_bg}
          data-swiper-parallax='-23%'
        ></div>
        <SwiperSlide className={styles.swiper_slide}>
          <Image className={styles.slide_img} src={unidrive} alt='unidirive' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <Image className={styles.slide_img} src={unidrive} alt='unidirive' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <Image className={styles.slide_img} src={unidrive} alt='unidirive' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
