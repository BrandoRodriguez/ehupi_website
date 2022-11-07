import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
export default function PageLayout({
  children,
  title = "Ehupi - Tech Lab for Startups & Companies",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Convertiremos tu genialidad en software y apps de clase mundial. No necesitas buscar más, somos el equipo que necesitas."
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="background-noise"></div>
    </>
  );
}
