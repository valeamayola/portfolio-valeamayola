import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import Info from "./components/Info";
import Content from "./components/Content";
import Plants from "./components/Plants";
import Logistic from "./components/Logistic";
import Logistic1 from "./components/Logistic1";
import Plants1 from "./components/Plants1";
import AppBook from "./components/AppBook";
import AppBook1 from "./components/AppBook1";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Hello />
      <Info />
      <Content />
      <Plants />
      <Plants1 />
      <Logistic />
      <Logistic1 />
      <AppBook />
      <AppBook1 />
    </>
  );
}
