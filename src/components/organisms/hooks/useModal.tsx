// src/components/organisms/hooks/useModal.ts
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalKey, setModalKey] = useState<string | null>(null);

  const openModal = (key: string) => {
    setModalKey(key);
    setIsOpen(true);
    console.log("폼 열기");
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalKey(null);
    console.log("폼 닫기");
  };

  return {
    isOpen,
    modalKey,
    openModal,
    closeModal
  };
};