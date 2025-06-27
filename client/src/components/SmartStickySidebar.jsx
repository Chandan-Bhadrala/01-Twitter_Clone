// components/SmartStickySidebar.jsx
import { useEffect, useRef, useState } from "react";

const SmartStickySidebar = ({ children }) => {
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  const [sticky, setSticky] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScrollResize = () => {
      const rectL = contentRef.current?.getBoundingClientRect();
      const rectR = sidebarRef.current?.getBoundingClientRect();
      const topSpace = 10;
      const breakpoint = 992;

      if (!rectL || !rectR) return;

      if (window.innerWidth >= breakpoint) {
        const enoughSpace = rectL.top - topSpace + (rectL.height - rectR.height) >= 0;
        const hasScrolledPastTop = rectL.top - topSpace <= 0;

        if (enoughSpace && hasScrolledPastTop) {
          setSticky(true);
          setAtBottom(false);
        } else if (!enoughSpace) {
          setSticky(false);
          setAtBottom(true);
        } else {
          setSticky(false);
          setAtBottom(false);
        }
      } else {
        setSticky(false);
        setAtBottom(false);
      }
    };

    handleScrollResize();
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);

    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);

  return (
    <div className="flex justify-between gap-4">
      {/* 🧩 Left (Content) */}
      <div ref={contentRef} className="basis-[60%] content-area">
        {/* Hero section goes here */}
      </div>

      {/* 🧊 Right (Sidebar) */}
      <div
        ref={sidebarRef}
        className={`side-bar basis-[30%] transition-all duration-200
          ${sticky ? "fixed top-4 right-12 w-[22%]" : "relative"}
          ${atBottom ? "mt-auto pb-[40px]" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SmartStickySidebar;
