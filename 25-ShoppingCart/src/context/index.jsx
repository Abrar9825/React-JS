// create conetxt
// provide the context
// wrap context in root
// consume the context using use context

import { createContext } from "react";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({ children }) {
    return <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;
