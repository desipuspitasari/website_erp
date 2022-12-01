import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import AboutUs from "../components/section/aboutus";
import Pricing from "../components/section/pricing";
import Hero from "../components/section/hero";
import ContactUs from "../components/section/contactus";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KEDA TECH</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <AboutUs />
      <Pricing />
      <ContactUs />
    </>
  );
};

export default Home;
