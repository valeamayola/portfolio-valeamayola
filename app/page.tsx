import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import Info from "./components/Info";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Hello />
      <Info />
    </>
  );
}
