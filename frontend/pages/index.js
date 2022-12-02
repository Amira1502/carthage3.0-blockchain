import BackgroundAnimation from '../components/BackgrooundAnimation/BackgrooundAnimation';
import Hero from '../components/Hero/Hero';
import Académie3 from '../components/Académie3/Académie3';
import Organisation from '../components/Organisation/Organisation';
// import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import About from '../components/About/About';

const Home = () => {

  return (
    <Layout>
      <Section grid>
      <BackgroundAnimation />
      <Hero />
      </Section> 
      <Académie3 />
      <Organisation />
      <About />
    </Layout>
  );
};

export default Home;