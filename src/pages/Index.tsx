import Head from 'next/head';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QE6BLPV4K8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QE6BLPV4K8');
          `}
        </script>
      </Head>
      
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
