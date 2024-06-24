import { CoreConfig } from '@config/app';
import { useState } from 'react';

export interface ContactProps extends CoreConfig {}

const Contact = (props: ContactProps) => {
    const { contact } = props;

    return (
        <div className="w-full flex justify-center h-[90vh] items-center text-display">
            <div className="flex gap-4 flex-col justify-center items-center px-4 py-1">
                {contact.map((item, i) => {
                    const [hovered, setHoverStatus] = useState(false);

                    return (
                        <div
                            key={i}
                            className={`cursor-pointer w-fit h-fit px-4 py-2 relative uppercase z-10 focus:outline-none
                                whitespace-nowrap ${
                                    hovered
                                        ? 'text-background bg-primary'
                                        : 'text-primary'
                                }`}
                            onClick={() => window.open(item.url, '_blank')}
                            onMouseEnter={() => setHoverStatus(true)}
                            onMouseLeave={() => setHoverStatus(false)}
                        >
                            {item.name}
                            {hovered || (
                                <div className="as-shadow px-4 py-2">
                                    {item.name}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Contact;
