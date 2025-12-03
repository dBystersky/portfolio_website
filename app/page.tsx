import Image from "next/image";
import WebsiteHeader from "./components/header";

export default function Home() {
  return (

    <>
      <div className="flex">
        <WebsiteHeader />
      </div>

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1>This is the main page</h1>
        </main>
      </div>

    </>
  );
}
