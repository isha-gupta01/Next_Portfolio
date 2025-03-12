"use client"
export const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 font-sans w-full higher-element">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button onClick={() => handleScroll("home")} className="nav-item cursor-pointer">Home</button>
        <button onClick={() => handleScroll("projects")} className="nav-item cursor-pointer">Projects</button>
        <button onClick={() => handleScroll("about")} className="nav-item cursor-pointer">About</button>
        <button onClick={() => handleScroll("contact")} className="nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </button>
      </nav>
    </div>
  );
};
