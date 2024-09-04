import * as React from "react";
import ReactModal from "react-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import Entry from "@components/modals/Entry.tsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    entries?: { title: string; subtitle?: string; description?: string }[];
}

const style = {
    content: {
        inset: '30% 40%',
        backgroundColor: '#252525',
        borderRadius: "10px",
        zIndex: 15,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 14,
    },
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, entries}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={style}
            ariaHideApp={true}
        >

            <div className="flex items-center justify-between mb-4">
                {title && <h2 className="flex-1 text-center font-display text-3xl">{title}</h2>}

                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <FontAwesomeIcon icon={faClose} size="xl"/>
                </button>
            </div>
            <div>
                {entries && entries.map((entry, index) => (
                    <Entry
                        key={index}
                        title={entry.title}
                        subtitle={entry.subtitle}
                        description={entry.description}
                    />
                ))}
            </div>

        </ReactModal>
    );
}

export default Modal;