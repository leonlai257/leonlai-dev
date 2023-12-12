import { CoreConfig } from '@config/app';
import {
    Html,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    useCursor,
} from '@react-three/drei';
import { TransitionWord } from '@src/components';
import { RenderSocialMediaLogo } from '@src/libs';
import { Suspense, useState } from 'react';

export interface ContactProps extends CoreConfig {}

const Contact = (props: ContactProps) => {
    const { color, contact } = props;

    const { primaryColor, secondaryColor } = color;

    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    const gapHeight = 0.6;

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <group position={[0, 0.2, 0]}>
                    <group
                        position={[
                            0,
                            ((contact.length - 1) * gapHeight) / 2,
                            0,
                        ]}
                        onPointerOver={(e) => setHoverStatus(true)}
                        onPointerOut={(e) => setHoverStatus(false)}
                    >
                        {contact.map((item, index) => {
                            return (
                                <TransitionWord
                                    key={`${item.name}`}
                                    onClick={() =>
                                        window.open(item.url, '_blank')
                                    }
                                    originalColor={primaryColor}
                                    transitionColor={secondaryColor}
                                    fontSize={0.4}
                                    position={[0, 0 - gapHeight * index, 0]}
                                >
                                    {/* <Html>
                                        {RenderSocialMediaLogo(item.name)}
                                    </Html> */}
                                    {item.name}
                                </TransitionWord>
                            );
                        })}
                    </group>
                </group>

                <PerspectiveCamera near={0.1} far={1000} />
            </Suspense>
        </>
    );
};

export default Contact;
