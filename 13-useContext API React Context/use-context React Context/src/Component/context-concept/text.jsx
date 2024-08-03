import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextTextComponent() {
    const { theme } = useContext(GlobalContext)
    console.log(theme);

    return (
        <h1 style={{
            color: theme === 'light' ? 'red' : 'white',
            backgroundColor: theme === 'light' ? 'lightyellow' : 'green',
            fontSize: theme === 'light' ? "50px" : "100px"
         }}>Abrar Shaikh</h1>
    )
}

export default ContextTextComponent;
