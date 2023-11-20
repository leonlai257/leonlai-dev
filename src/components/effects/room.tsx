import { Box, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ColorProfile } from '@src/config/app';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useLocation } from 'wouter';

const getRoomColor = (colorProfile: ColorProfile, room: string) => {
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        colorProfile;

    console.log(room);
    switch (room) {
        case '/projects':
            return '#222232';
        case '/':
        default:
            return quaternaryColor;
    }
};

interface RoomProps {
    colorProfile: ColorProfile;
    room?: string;
}

export const Room = ({ colorProfile }: RoomProps) => {
    const [location, setLocation] = useLocation();

    return (
        <Box args={[100, 100, 100]}>
            <meshBasicMaterial
                color={getRoomColor(colorProfile, location)}
                side={THREE.DoubleSide}
            />
        </Box>
    );
};
