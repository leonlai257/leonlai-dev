import { CoreConfig } from '@config/app';
import { PerspectiveCamera, useCursor } from '@react-three/drei';
import { ContactTransition } from '@src/components';
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
            <Suspense fallback={<group></group>}>
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
                                <>
                                    <ContactTransition
                                        key={`${item.name}`}
                                        onClick={() =>
                                            window.open(item.url, '_blank')
                                        }
                                        originalColor={primaryColor}
                                        transitionColor={secondaryColor}
                                        fontSize={0.4}
                                        position={[0, 0 - gapHeight * index, 0]}
                                    >
                                        {item.name}
                                    </ContactTransition>
                                </>
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
