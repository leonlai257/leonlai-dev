import { CoreConfig } from '@src/libs/config';
import { ContactLink } from '@src/components';

export interface ContactProps extends CoreConfig { }

const Contact = (props: ContactProps) => {
    const { contact } = props;

    return (
        <div className="w-full flex justify-center h-[90vh] items-center text-display">
            <div className="flex gap-4 flex-col justify-center items-center px-4 py-1">
                {contact.map((item, i) => {
                    return <ContactLink key={i} item={item} />;
                })}
            </div>
        </div>
    );
};

export default Contact;
