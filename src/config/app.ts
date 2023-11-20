import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
}

export type ColorProfile = {
    primaryColor: THREE.ColorRepresentation;
    secondaryColor: THREE.ColorRepresentation;
    tertiaryColor: THREE.ColorRepresentation;
    quaternaryColor: THREE.ColorRepresentation;
};

const Config = {
    color: {
        primaryColor: '#8294C4',
        secondaryColor: '#ACB1D6',
        tertiaryColor: '#DBDFEA',
        quaternaryColor: '#FFEAD2',
    },
};

export default Config;
