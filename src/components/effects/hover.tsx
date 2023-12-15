import { ReactNode, useState } from 'react';
import { TransitionWord } from '@src/components';
import * as THREE from 'three';

export type HoverProps = {
    children: ReactNode;
    display: string;
    primaryColor: THREE.ColorRepresentation;
    secondaryColor: string;
} & any;

export const Hover = ({
    children,
    display,
    primaryColor,
    secondaryColor,
    ...props
}: HoverProps) => {
    // const [hovered, setHoverStatus] = useState(false);

    return (
        <group
            {...props}
            // onPointerOver={(e) => setHoverStatus(true)}
            // onPointerOut={(e) => setHoverStatus(false)}
        >
            <TransitionWord
                anchorX="right"
                originalColor={primaryColor}
                transitionColor={secondaryColor}
                fontSize={0.4}
                fontWeight={'bold'}
            >
                {display}
                {/* {hovered && <>{children}</>} */}
            </TransitionWord>
        </group>
    );
};
