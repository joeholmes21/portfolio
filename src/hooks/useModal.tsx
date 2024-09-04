import {useState} from "react";
import popSound from "@assets/audio/pop.mp3";

const useModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const audio = new Audio(popSound as string);

    const openModal = (modal: string) => {
        audio.play().then(() => setActiveModal(modal));
    }
    const closeModal = () => setActiveModal(null);

    const isOpen = (modal: string) => activeModal === modal;

    return {
        isOpen,
        openModal,
        closeModal
    };
};

export default useModal;
