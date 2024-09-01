import Modal from "../../utils/Modal.tsx";
import * as React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root")

interface EntryProps {
    title: string,
    date: string,
    description: string,
}

const ExperienceEntry: React.FC<EntryProps> = ({title, date, description}) => {
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
}

const ModalExperience = ({isOpen, onRequestClose}) => {
    return (
        <Modal title="Experience" isOpen={isOpen} onClose={onRequestClose}>
            <ExperienceEntry
                title="BAE Systems"
                date="Sep. 23 - Pres."
                description="Apprentice Embedded Electronics Engineer working with software-defined radios, Petalinux and programming in C."/>

            <ExperienceEntry
                title="Jamo Tech Limited"
                date="Aug. 20 - Jan. 23"
                description="Systems Administrator working around the Gaming Sector. Providing secure solutions accompanied by private networks, backup solutions and machine optimisations. Managing server fleets of >300."/>
        </Modal>
    );
};

export default ModalExperience;
