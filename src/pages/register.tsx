import Head from "next/head";
import { NextPage } from "next";
import RegisterSection from "../components/section/registersection";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>KEDA TECH</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterSection />
    </>
  );
};

export default Register;
