import { shaderMaterial } from '@react-three/drei';
import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';
import { hotspotFragment, hotspotVertex } from '../shaders/hotspotShader';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            hotspotMaterial: ReactThreeFiber.Object3DNode<
                THREE.ShaderMaterial,
                typeof HotspotMaterial
            >;
        }
    }
}

const HotspotMaterial = shaderMaterial(
    {
        blending: THREE.AdditiveBlending,
        uTime: 0,
        opacity: 0.5,
        transparent: true,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uTextureTiling: 3.2,
        uThrust: 0.3,
    },
    hotspotVertex,
    hotspotFragment,
);

export default HotspotMaterial;
