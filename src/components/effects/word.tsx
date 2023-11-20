import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Word = ({
    children,
    originalColor,
    transitionColor,
    ...props
}: {
    children: ReactNode;
    originalColor: THREE.ColorRepresentation;
    transitionColor?: THREE.ColorRepresentation;
    outlineWidth?: number;
    outlineColor?: string;
}) => {
    const color = new THREE.Color();
    const ref = useRef<any>();
    const [hovered, setHovered] = useState(false);
    const over = (e: any) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'auto';
        }
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(
            color.set(
                hovered
                    ? transitionColor
                        ? transitionColor
                        : originalColor
                    : originalColor
            ),
            0.1
        );
    });

    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            onClick={() => console.log('clicked')}
            {...props}
        >
            {children}
        </Text>
    );
};
