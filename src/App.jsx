import React from 'react';
import img1 from '../img/img1.jpg';

// ==========================================
// Todo 1: Component NavBar
// ==========================================
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border border-gray-200 rounded-xl mb-8 bg-neutral-50">
      {/* โลโก้ */}
      <div className="font-bold text-xl text-gray-800">
        hh.
      </div>
      
      {/* ปุ่มกด Login / Sign up */}
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-transparent border border-gray-300 rounded-full cursor-pointer font-medium hover:bg-gray-100 transition-colors">
          Log in
        </button>
        <button className="px-6 py-2 bg-gray-900 text-white rounded-full cursor-pointer font-medium hover:bg-gray-800 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
};

// ==========================================
// Todo 2: Component HeroSection
// ==========================================
const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 ">
      
      {/* ส่วนข้อความด้านซ้าย */}
      <div className="flex-1 text-right">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
          Stay<br />Informed,<br />Stay Inspired
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs ml-auto">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
        </p>
      </div>

      {/* ส่วนรูปภาพตรงกลาง */}
      <div className="flex-1 flex justify-center">
        <img 
          src={img1} 
          alt="Man with a cat in a forest" 
          className="w-full max-w-[300px] h-auto rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* ส่วนข้อมูลผู้เขียนด้านขวา */}
      <div className="flex-1 text-left">
        <span className="text-xs text-gray-500 block mb-1">-Author</span>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Thompson P.</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
        </p>
      </div>
      
    </main>
  );
};

// ==========================================
// Component หลัก (App) สำหรับ Render ทั้งหมด
// ==========================================
const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      {/* Render NavBar */}
      <NavBar />
      
      {/* Render HeroSection */}
      <HeroSection />
    </div>
  );
};

export default App;