import {useEffect, useState} from "react";

const Header = () => {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorBlinkInterval = 500;

        const blinkCursor = () => setShowCursor((prev) => !prev);

        const intervalId = setInterval(blinkCursor, cursorBlinkInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="absolute z-10 w-full flex items-center justify-center">
            <h1 className="font-display font-bold text-5xl">
                Joe Holmes
                {showCursor ? "|" : ""}
            </h1>
        </div>
    );
};

export default Header;
