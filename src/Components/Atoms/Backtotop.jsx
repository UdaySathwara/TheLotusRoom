import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:right-4 md:bottom-14 lg:right-4 z-50 p-2.5 bg-[#8E5D36] hover:bg-[#c3a07a] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-90 hover:text-black"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    )
  );
};

export default BackToTopButton;
