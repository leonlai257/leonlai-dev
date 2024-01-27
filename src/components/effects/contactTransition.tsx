import { Image, Text } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ContactTransition = ({
    children,
    originalColor,
    transitionColor,
    enable = true,
    ...props
}: {
    children: ReactNode;
    originalColor: THREE.ColorRepresentation;
    transitionColor?: THREE.ColorRepresentation;
    enable?: boolean;
} & any) => {
    const color = new THREE.Color();
    const ref = useRef<any>();
    const imageRef = useRef<any>();
    const [hovered, setHovered] = useState(false);
    const over = (e: any) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'auto';
        }
    }, [hovered]);
    useFrame(({ camera }) => {
        ref.current.quaternion.copy(camera.quaternion);
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
        // imageRef.current.material.color.lerp(
        //     color.set(
        //         hovered
        //             ? transitionColor
        //                 ? transitionColor
        //                 : originalColor
        //             : originalColor
        //     ),
        //     0.1
        // );
    });

    return (
        <group
            onPointerOver={over}
            onPointerOut={out}
            onClick={() => console.log('clicked')}
        >
            {/* <Image
                ref={imageRef}
                url={'/icons/GithubIcon.svg'}
                scale={0.3}
                transparent
            /> */}
            <Text ref={ref} font={'/fonts/NotoSans-Regular.ttf'} {...props}>
                {children}
            </Text>
        </group>
    );
};
