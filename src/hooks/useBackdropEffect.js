import { useEffect } from "react";

export const useBackdropEffect = (isOpen, toggleMenu, backdropRef) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.code === "Escape") {
        toggleMenu();
      }
    };

    const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) {
        toggleMenu();
      }
    };

    const currentBackdrop = backdropRef.current;

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    if (currentBackdrop) {
      currentBackdrop.addEventListener("click", handleBackdropClick);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";

      if (currentBackdrop) {
        currentBackdrop.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [toggleMenu, backdropRef, isOpen]);
};
