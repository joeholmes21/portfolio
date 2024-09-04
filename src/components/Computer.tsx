import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import {useRef, useState} from 'react';
import * as THREE from 'three';
import Screen from './Screen.tsx';
import computer from "@assets/3d/computer.glb";
import useModal from "@hooks/useModal.tsx";
import Keyboard from "./Keyboard.tsx";
import contact from "@assets/img/contact.jpg";
import experience from "@assets/img/experience.jpg";
import projects from "@assets/img/projects.jpg";
import keyboardClick from "@assets/audio/keyboard.mp3";
import {ModalContact, ModalExperience, ModalProjects} from "./modals/Modals.tsx";
import {ModalType} from "@components/modals/ModalTypes.ts";

const Computer = () => {
    const ref = useRef<THREE.Mesh>(null!);
    const {scene} = useGLTF(computer as string);

    return (
        <mesh ref={ref} scale={1}>
            <primitive object={scene}/>
        </mesh>
    );
};

const ComputerCanvas = () => {
    const {isOpen, openModal, closeModal} = useModal();
    const [currentModal, setCurrentModal] = useState('experienceModal');

    const audio = new Audio(keyboardClick as string);

    const modals: ModalType[] = [
        {name: "experienceModal", image: experience as string, color: "#33FF57"},
        {name: "projectsModal", image: projects as string, color: "#FF5733"},
        {name: "contactModal", image: contact as string, color: "#3357FF"},
    ];

    const nextModal = () => {
        audio.play().then(() => {
            const currentIndex = modals.findIndex(modal => modal.name === currentModal);
            const nextIndex = (currentIndex + 1) % modals.length;
            setCurrentModal(modals[nextIndex].name); // Update the current modal name
        });
    };

    return (
        <div className="flex items-center justify-center content-center h-screen">
            <Canvas camera={{fov: 60, position: [-20, 30, 90]}} className="w-full h-full">
                <ambientLight intensity={Math.PI / 2}/>
                <pointLight position={[-25, 25, 5]} decay={0} intensity={Math.PI}/>

                {/* Computer Mesh */}
                <Computer position={[0, 0, 0]}/>

                {/* Independent Screen */}
                <Screen modalName={currentModal} modals={modals} onClick={() => openModal(currentModal)}/>

                {/* Independent Keyboard */}
                <Keyboard onClick={nextModal}/>

                <OrbitControls rotateSpeed={0.5} target={[-20, 25, 0]} maxPolarAngle={Math.PI / 2}/>
            </Canvas>

            <ModalExperience isOpen={isOpen('experienceModal')} onRequestClose={() => closeModal()}/>
            <ModalProjects isOpen={isOpen('projectsModal')} onRequestClose={() => closeModal()}/>
            <ModalContact isOpen={isOpen('contactModal')} onRequestClose={() => closeModal()}/>
        </div>
    );
};

export default ComputerCanvas;
