import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maplin World Group</title>
      </Head>
      <Nav />

      <div className=" ">
        <Intro />
        <Footer />
      </div>
    </div>
  );
}
