import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {
    const { handleThemeButton } = useContext(GlobalContext)

    // function ToogleFunction() {
    //     setTheme(theme === 'light' ? "dark" : "light")
    // }

    return (
        <button onClick={handleThemeButton}>Change Theme</button>
    );
}

export default ContextButtonComponent;
