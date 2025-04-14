import { ContactItem } from '@src/libs/config';
import { useState } from 'react';

export interface ContactItemProps {
    item: ContactItem;
}

export const ContactLink = ({ item }: ContactItemProps) => {
    const [hovered, setHoverStatus] = useState(false);

    return (
        <div
            className={`cursor-pointer w-fit h-fit px-4 py-2 relative uppercase z-10 focus:outline-none
                whitespace-nowrap ${hovered ? 'text-background bg-primary' : 'text-primary'
                }`}
            onClick={() => window.open(item.url, '_blank')}
            onMouseEnter={() => setHoverStatus(true)}
            onMouseLeave={() => setHoverStatus(false)}
        >
            {item.name}
            {hovered || <div className="as-shadow px-4 py-2">{item.name}</div>}
        </div>
    );
};
