import { CoreConfig } from '@config/app';
import { useState } from 'react';

export interface ContactProps extends CoreConfig {}

const Contact = (props: ContactProps) => {
    const { contact } = props;

    const [hovered, setHoverStatus] = useState(false);

    return (
        <>
            <div>
                {contact.map((item, index) => {
                    return (
                        <>
                            <div
                                key={`${item.name}`}
                                onClick={() => window.open(item.url, '_blank')}
                            >
                                {item.name}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Contact;
