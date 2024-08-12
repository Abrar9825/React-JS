import { useLocation } from "react-router-dom"

export default function RecipeList() {
    const location = useLocation()
    console.log("Location Of file ",location.pathname);

    return (
        <div>
            <h3>Recipe List Page</h3>
        </div>
    )
}