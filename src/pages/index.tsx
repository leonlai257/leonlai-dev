import { CoreConfig } from '@config/app';
import { useState } from 'react';

export interface MainProps extends CoreConfig {}

const Main = (props: MainProps) => {
    const { categories } = props;

    // const [_, push] = useLocation();

    return (
        <div className="bg-white w-full h-full z-50">
            <div>Leon Lai</div>
            <div>Full Stack Developer</div>

            <div>
                <div
                    onClick={() => {
                        // push('/about');
                    }}
                >
                    About Me
                </div>

                <div
                    onClick={() => {
                        // push('/projects');
                    }}
                >
                    What I Do
                </div>
            </div>
        </div>
    );
};

export default Main;
