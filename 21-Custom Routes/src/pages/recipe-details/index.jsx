import { useParams } from "react-router-dom";

export default function RecipeDetailsPage() {
    const { id } = useParams();

    return (
        <div>
            <h3>Recipe Details for ID: {id}</h3>
        </div>
    );
}
