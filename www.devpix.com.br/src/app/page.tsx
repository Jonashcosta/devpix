import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header>
        <NavBar />
      </header>
      <main className="">
        <div>
          body
        </div>
      </main>
      <footer className="">
        <h1>footer</h1>
      </footer>
    </div>
  );
}
