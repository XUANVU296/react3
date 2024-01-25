import React, { useState, useEffect } from 'react';

function Time(props) {
    const Timer = () => {
        const [timer, setTimer] = useState(120);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            // Clean up the interval when the component unmounts
            return () => {
                clearInterval(intervalId);
            };
        }, []);

        return (
            <div>
                Timer: {timer}
            </div>
        );
    }

    return <Timer />;
}

export default Time;
