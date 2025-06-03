import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="font-sans">
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Hero />
      </div>
     <About />
     <Stats />
     <Services />
     <Projects />
     <Testimonials />
     <Booking />
     <Contact />
     <Footer />
    </main>
  );
}