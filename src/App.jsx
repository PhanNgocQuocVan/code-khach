import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import WheelSection from "./components/WheelSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingShapes from "./components/FloatingShapes";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-green-100 to-green-50">
      <FloatingShapes />
      {/* Bạn có thể thêm Header nếu muốn */}
      <Header />

      <main>
        <HeroSection />
        <ProblemsSection />
        <WheelSection />
      </main>

      {/* Bạn có thể thêm Footer nếu muốn */}
      <Footer />
    </div>
  );
}

export default App;
