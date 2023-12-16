import { ReactNode, useEffect, useRef, useState } from 'react';
import { TransitionWord } from '@src/components';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { ColorProfile } from '@src/config/app';

export type CategoryProps = {
    children: ReactNode;
    display: string;
    color: ColorProfile;
} & any;

export const Category = ({
    children,
    display,
    color,
    ...props
}: CategoryProps) => {
    const {
        textColor,
        backgroundColor,
        primaryColor,
        secondaryColor,
        accentColor,
    } = color;

    const ref = useRef<THREE.Group>(null!);
    const [show, setShow] = useState(false);

    const offsetX = -4;

    useFrame(() => {
        if (
            (show && ref.current.position.x > offsetX) ||
            (!show && ref.current.position.x < 0)
        ) {
            ref.current.position.x = THREE.MathUtils.lerp(
                ref.current.position.x,
                show ? offsetX : 0,
                0.1
            );
        }
    });

    return (
        <group {...props} onClick={() => setShow(!show)}>
            <group ref={ref}>
                <TransitionWord
                    anchorX={'left'}
                    originalColor={primaryColor}
                    transitionColor={secondaryColor}
                    fontSize={0.4}
                    fontWeight={'bold'}
                >
                    {display}
                </TransitionWord>
            </group>
            {show && (
                <TransitionWord
                    anchorX="right"
                    originalColor={accentColor}
                    transitionColor={secondaryColor}
                    fontSize={0.4}
                    fontWeight={'bold'}
                    position={[-offsetX, 0, 0]}
                >
                    {children}
                </TransitionWord>
            )}
        </group>
    );
};
