import { Box, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ColorProfile } from '@src/config/app';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useLocation } from 'wouter';

const getRoomColor = (colorProfile: ColorProfile, room: string) => {
    const {
        textColor,
        backgroundColor,
        backgroundDark,
        primaryColor,
        secondaryColor,
        accentColor,
    } = colorProfile;

    if (room.includes('projects')) {
        return backgroundDark;
    }
    switch (room) {
        case '/':
        default:
            return backgroundColor;
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
