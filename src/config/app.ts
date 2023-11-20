import * as THREE from 'three';

export interface CoreConfig {
    primaryColor: THREE.ColorRepresentation;
    secondaryColor: THREE.ColorRepresentation;
    tertiaryColor: THREE.ColorRepresentation;
    quaternaryColor: THREE.ColorRepresentation;
}

const Config = {
    primaryColor: '#8294C4',
    secondaryColor: '#ACB1D6',
    tertiaryColor: '#DBDFEA',
    quaternaryColor: '#FFEAD2',
};

export default Config;
