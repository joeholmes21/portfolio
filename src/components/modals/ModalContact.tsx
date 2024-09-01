import Modal from "../../utils/Modal.tsx";
import * as React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root")

interface EntryProps {
    title: string,
    username: string,
    description: string,
}

const ContactEntry: React.FC<EntryProps> = ({title, username, description}) => {
    return (
        <div className="p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {username && <h4 className="text-sm text-gray-500">{username}</h4>}
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

const ModalContact = ({isOpen, onRequestClose}) => {
    return (
        <Modal title="Contact" isOpen={isOpen} onClose={onRequestClose}>
            <ContactEntry
                title="LinkedIn"
                username="@joe-h-7a9389231"
                description=""/>

            <ContactEntry
                title="E-Mail"
                username="joeholmes100.jh@gmail.com"
                description=""/>
        </Modal>
    );
};

export default ModalContact;
