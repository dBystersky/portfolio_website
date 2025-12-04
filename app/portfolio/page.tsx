import WebsiteHeader from "../components/header";
import WebsiteFooter from "../components/footer";


export default function PortfolioPage() {
  return (   
    
    <>
      <WebsiteHeader />

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1>This is the portfolio page</h1>
      </main>

      <WebsiteFooter />
    </>
  );
}