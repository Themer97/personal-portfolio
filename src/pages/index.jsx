import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';

const index = () => {
  return (
    <div className='main'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
