import Modal from "../../utils/Modal.tsx";
import * as React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root")

interface EntryProps {
    title: string,
    date: string,
    description: string,
}

const ProjectEntry: React.FC<EntryProps> = ({title, date, description}) => {
    return (
        <div className="p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {date && <h4 className="text-sm text-gray-500">{date}</h4>}
                </div>

                {description && (
                    <div className="ml-4 flex-grow max-w-72">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const ModalProjects = ({isOpen, onRequestClose}) => {
    return (
        <Modal title="Projects" isOpen={isOpen} onClose={onRequestClose}>
            <ProjectEntry
                title="Portfolio Site"
                date="Aug. 24 - Sep. 24"
                description="That's this site :D"/>
        </Modal>
    );
};

export default ModalProjects;
