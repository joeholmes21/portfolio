import Modal from "@components/modals/Modal.tsx";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const ModalProjects: React.FC<ModalProps> = ({isOpen, onRequestClose}) => {
    const projectEntries = [
        {title: "Portfolio Site", subtitle: "Aug. 24 - Sep. 24", description: "That's this site :D"},
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Projects" entries={projectEntries}/>;
};

export const ModalExperience: React.FC<ModalProps> = ({isOpen, onRequestClose}) => {
    const experienceEntries = [
        {
            title: "BAE Systems",
            subtitle: "Sep. 23 - Pres.",
            description: "Apprentice Embedded Electronics Engineer working with software-defined radios, Petalinux and programming in C."
        },
        {
            title: "Jamo Tech Limited",
            subtitle: "Aug. 20 - Jan. 23",
            description: "Systems Administrator working around the Gaming Sector. Providing secure solutions accompanied by private networks, backup solutions and machine optimisations. Managing server fleets of >300."
        },
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Experience"
                  entries={experienceEntries}/>;
};

export const ModalContact: React.FC<ModalProps> = ({isOpen, onRequestClose}) => {
    const contactEntries = [
        {title: "LinkedIn", subtitle: "@joeholmes21"},
        {title: "E-Mail", subtitle: "joeholmes100.jh@gmail.com"},
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Contact" entries={contactEntries}/>;
};
