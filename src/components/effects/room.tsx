import { Box } from '@react-three/drei';
import { ColorProfile } from '@src/config/app';
import * as THREE from 'three';
import { useLocation } from 'wouter';

const getRoomColor = (colorProfile: ColorProfile, room: string) => {
    const { backgroundColor, backgroundDark } = colorProfile;

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
    const [location] = useLocation();
    return (
        <Box args={[100, 100, 100]}>
            <meshBasicMaterial
                color={getRoomColor(colorProfile, location)}
                side={THREE.DoubleSide}
            />
        </Box>
    );
};
