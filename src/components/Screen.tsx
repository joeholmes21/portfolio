import {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from 'three';
import {ModalType} from "@components/modals/ModalTypes.ts";

interface ScreenProps {
    onClick: () => void;
    modalName: string;
    modals: ModalType[];
}

const Screen = ({onClick, modalName, modals}: ScreenProps) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [color, setColor] = useState<string | null>(modals[0].color || null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    useEffect(() => {
        const currentModal = modals.find(modal => modal.name === modalName);

        if (currentModal) {
            if (currentModal.image) {
                const loader = new THREE.TextureLoader();

                loader.load(
                    currentModal.image,
                    (loadedTexture) => {
                        setTexture(loadedTexture);
                        setColor(null);
                    },
                    undefined,
                    (error) => {
                        console.error('Error loading texture', error);
                        setTexture(null);
                        setColor(currentModal.color || 'gray');
                    }
                );
            } else {
                setTexture(null);
                setColor(currentModal.color || 'gray');
            }
        }
    }, [modalName, modals]);

    const geometry = useMemo(() => new THREE.PlaneGeometry(), []);

    return (
        <mesh
            ref={ref}
            scale={[42, 38, 35]}
            position={[-23, 29, -11]}
            rotation={[-0.08, 0.18, 0.01]}
            onClick={onClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <primitive object={geometry} attach="geometry"/>
            {texture ? (
                <meshBasicMaterial map={texture}/>
            ) : (
                <meshStandardMaterial color={color as string}/>
            )}
        </mesh>
    );
};

export default Screen;
