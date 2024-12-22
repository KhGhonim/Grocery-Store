import { useState, useEffect } from "react";

export const useModal = (modalId) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem(`modal_${modalId}`);
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, [modalId]);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem(`modal_${modalId}`, "true");
  };

  return { isOpen, closeModal };
};
