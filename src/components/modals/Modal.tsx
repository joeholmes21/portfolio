import * as React from "react";
import ReactModal from "react-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import Entry from "@components/modals/Entry.tsx";

ReactModal.setAppElement('#root');

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    entries?: { title: string; subtitle?: string; description?: string }[];
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, entries}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={true}
            className="content"
            overlayClassName="overlay"
        >

            <div className="flex items-center justify-between mb-4">
                {title && <h2 className="flex-1 text-center font-display text-3xl">{title}</h2>}

                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700">
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