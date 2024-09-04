import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";

interface KeyboardProps {
    onClick: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({onClick}) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            ref={ref}
            scale={[50, 2, 20]}
            position={[-22, 2, 23]}
            onClick={onClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <boxGeometry/>
            <meshStandardMaterial
                color="gray"
                transparent={true}
                opacity={0}
            />
        </mesh>
    )
}

export default Keyboard;