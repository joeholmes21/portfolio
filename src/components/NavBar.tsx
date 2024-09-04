import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faPaperPlane, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import useModal from "@hooks/useModal.tsx";
import {ModalContact, ModalExperience, ModalProjects} from "@components/modals";

const NavBar = () => {
    const {isOpen, openModal, closeModal} = useModal();

    const handleModalToggle = (modal: string) => {
        isOpen(modal) ? closeModal() : openModal(modal);
    };

    return (
        <div>
            <div className="flex flex-col absolute z-10 right-0 bottom-0 space-y-1 m-2">
                <button
                    onClick={() => handleModalToggle('contactModal')}
                    className="bg-blue-500 p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-400 hover:-translate-x-1.5">
                    <FontAwesomeIcon icon={faPaperPlane} size="xl" className="text-white"/>
                </button>
                <button
                    onClick={() => handleModalToggle('experienceModal')}
                    className="bg-green-500 p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-400 hover:-translate-x-1.5">
                    <FontAwesomeIcon icon={faClock} size="xl" className="text-white"/>
                </button>
                <button
                    onClick={() => handleModalToggle('projectsModal')}
                    className="bg-red-500 p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-red-400 hover:-translate-x-1.5">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" className="text-white"/>
                </button>
            </div>

            <ModalExperience
                isOpen={isOpen('experienceModal')}
                onRequestClose={() => closeModal()}
            />
            <ModalContact
                isOpen={isOpen('contactModal')}
                onRequestClose={() => closeModal()}
            />
            <ModalProjects
                isOpen={isOpen('projectsModal')}
                onRequestClose={() => closeModal()}
            />
        </div>
    );
}

export default NavBar;
