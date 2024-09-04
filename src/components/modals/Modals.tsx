import Modal from "@components/modals/Modal.tsx";

export const ModalProjects = ({isOpen, onRequestClose}) => {
    const projectEntries = [
        {title: "Portfolio Site", subtitle: "Aug. 24 - Sep. 24", description: "That's this site :D"},
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Projects" entries={projectEntries}/>;
};

export const ModalExperience = ({isOpen, onRequestClose}) => {
    const experienceEntries = [
        {title: "BAE Systems", subtitle: "Sep. 23 - Pres.", description: "Apprentice Embedded Electronics Engineer..."},
        {title: "Jamo Tech Limited", subtitle: "Aug. 20 - Jan. 23", description: "Systems Administrator..."},
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Experience"
                  entries={experienceEntries}/>;
};

export const ModalContact = ({isOpen, onRequestClose}) => {
    const contactEntries = [
        {title: "LinkedIn", subtitle: "@joe-h-7a9389231"},
        {title: "E-Mail", subtitle: "joeholmes100.jh@gmail.com"},
    ];

    return <Modal isOpen={isOpen} onClose={onRequestClose} title="Contact" entries={contactEntries}/>;
};
