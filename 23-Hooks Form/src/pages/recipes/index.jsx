
import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/use-fetch";
import useWindowResize from "../../Hooks/window-resize";



function ReceipeList() {
    const location = useLocation();

    const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
    const windowSize = useWindowResize()
    if (loading) return <h1>Fetching recipes! Please wait</h1>;

    return (
        <div>
            <h1 style={{ color: windowSize.width < 786 ? 'red' : 'black' }}>Recipe List</h1>
            <p >Current Window Width <b>{windowSize.width}</b> And Current height <b>{windowSize.width}</b> </p>
            <ul>
                {data?.recipes?.length > 0
                    ?
                    data?.recipes.map((recipeItem) => (
                        <div>
                            <img src={recipeItem?.image} />
                            <label>{recipeItem?.name}</label>
                        </div>
                    ))
                    :
                    null}
            </ul>
        </div>
    );
}

export default ReceipeList;
