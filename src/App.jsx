import React from 'react';

// ==========================================
// Mock Data สำหรับบทความ
// ==========================================
const mockArticles = [
  {
    id: 1,
    category: 'Cat',
    title: 'Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do',
    description: 'Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline\'s actions...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Cat',
    title: 'The Fascinating World of Cats: Why We Love Our Furry Friends',
    description: 'Cats have captivated human hearts for thousands of years. Whether lounging in a sunny spot or playfully chasing a string, these furry companions bring warmth an...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'Cat',
    title: 'Finding Motivation: How to Stay Inspired Through Life\'s Challenges',
    description: 'This article explores strategies to maintain motivation when faced with personal or professional challenges. From setting small goals to practicing mindfulness and s...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'Cat',
    title: 'The Science of the Cat\'s Purr: How It Benefits Cats and Humans Alike',
    description: 'Discover the fascinating science behind the cat\'s purr, including its potential healing properties for both cats and humans. Learn how this unique sound is prod...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'Cat',
    title: 'Unlocking Creativity: Simple Habits to Spark Inspiration Daily',
    description: 'Discover practical ways to nurture creativity in your everyday life. Whether it\'s through journaling, taking breaks, or exploring new hobbies, this article offers simp...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'Cat',
    title: 'Top 10 Health Tips to Keep Your Cat Happy and Healthy',
    description: 'This guide offers essential tips on keeping your cat in peak health. Covering topics like proper nutrition, regular vet visits, grooming, and mental stimulation, it\'s a mu...',
    author: 'Thompson P.',
    date: '11 September 2024',
    imgUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// ==========================================
// 1. Component NavBar
// ==========================================
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border border-gray-200 rounded-2xl mb-6 bg-white">
      <div className="font-extrabold text-2xl text-gray-800 tracking-tighter">
        hh.
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2.5 bg-transparent border border-gray-300 rounded-full cursor-pointer font-medium text-sm hover:bg-gray-50 transition-colors">
          Log in
        </button>
        <button className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-full cursor-pointer font-medium text-sm hover:bg-black transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
};

// ==========================================
// 2. Component HeroSection
// ==========================================
const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center gap-10 p-10 border border-gray-200 rounded-[2rem] bg-white mb-16">
      <div className="flex-1 text-right flex flex-col items-end">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] text-gray-900 mb-6 tracking-tight">
          Stay<br />Informed,<br />Stay Inspired
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
        </p>
      </div>
      
      <div className="flex-1 flex justify-center w-full">
        <img 
          src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
          alt="Man with a cat in a forest" 
          className="w-full max-w-[320px] aspect-[3/4] rounded-3xl object-cover"
        />
      </div>

      <div className="flex-1 text-left flex flex-col justify-center">
        <span className="text-[11px] text-gray-400 font-medium tracking-wider uppercase mb-2 block">-Author</span>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Thompson P.</h3>
        <div className="text-sm text-gray-500 leading-relaxed space-y-4 max-w-[300px]">
          <p>
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
          </p>
          <p>
            When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
};

// ==========================================
// 3. Component ArticleCard
// ==========================================
const ArticleCard = ({ article }) => {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="overflow-hidden rounded-3xl aspect-[16/10] bg-gray-100">
        <img 
          src={article.imgUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-1">
        <span className="bg-[#e6f4ea] text-[#1e8e3e] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
          {article.category}
        </span>
        <h3 className="font-bold text-xl text-gray-900 leading-snug group-hover:underline decoration-2 underline-offset-4">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {article.description}
        </p>
        <div className="flex items-center gap-3 mt-1">
          <img 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Author Avatar" 
            className="w-6 h-6 rounded-full object-cover" 
          />
          <span className="text-xs font-semibold text-gray-900">{article.author}</span>
          <span className="text-xs text-gray-300">|</span>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Component LatestArticles
// ==========================================
const LatestArticles = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Latest articles</h2>
        {/* จุดสีเทาตามภาพอ้างอิง (เพิ่มให้ดูคล้ายภาพตัวอย่างมากขึ้น) */}
        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
      </div>
      
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#f4f4f4] p-3 rounded-2xl mb-10 gap-3">
        
        {/* Desktop View: Buttons (แสดงเฉพาะหน้าจอ md ขึ้นไป) */}
        <div className="hidden md:flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
          <button className="px-5 py-2.5 bg-[#e0e0e0] text-gray-900 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors">Highlight</button>
          <button className="px-5 py-2.5 text-gray-500 hover:bg-[#e8e8e8] hover:text-gray-900 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">Cat</button>
          <button className="px-5 py-2.5 text-gray-500 hover:bg-[#e8e8e8] hover:text-gray-900 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">Inspiration</button>
          <button className="px-5 py-2.5 text-gray-500 hover:bg-[#e8e8e8] hover:text-gray-900 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">General</button>
        </div>

        {/* Mobile View: Dropdown (แสดงเฉพาะหน้าจอมือถือ) */}
        <div className="w-full md:hidden relative">
          <select 
            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm cursor-pointer"
            defaultValue="highlight"
          >
            <option value="highlight">Highlight</option>
            <option value="cat">Cat</option>
            <option value="inspiration">Inspiration</option>
            <option value="general">General</option>
          </select>
          {/* Custom Dropdown Arrow Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-auto relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full md:w-72 pl-4 pr-10 py-3 md:py-2.5 rounded-xl border-none text-sm text-gray-700 bg-white focus:ring-2 focus:ring-gray-200 outline-none shadow-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* View more button */}
      <div className="flex justify-center mt-16">
        <button className="text-sm font-bold text-gray-800 hover:text-black underline underline-offset-4 decoration-2 transition-colors">
          View more
        </button>
      </div>
    </section>
  );
};

// ==========================================
// 5. Component Footer
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] py-8 px-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-gray-600">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
        <span>Get in touch</span>
        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </a>
        </div>
      </div>
      <div>
        <a href="#" className="hover:text-black underline underline-offset-4 decoration-2">Home page</a>
      </div>
    </footer>
  );
};

// ==========================================
// Component หลัก (App)
// ==========================================
export default function App() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-10 text-gray-900 font-sans">
      <div className="max-w-[1100px] mx-auto px-6">
        <NavBar />
        <HeroSection />
        <LatestArticles />
        <Footer />
      </div>
    </div>
  );
}