import { useDispatch, useSelector } from "react-redux"
import { handleInputChange } from "../store/slices/blogSclices";

function AddNewBlog() {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    console.log(state);


    function handleOnchange(event) {
        dispatch(handleInputChange({
            [event.target.name]: event.target.value
        }))
    }
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">ENter Blog title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Entrt Title"
                        id="title"
                        onChange={handleOnchange}
                    />
                    <label htmlFor="">Enter Blog Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Entrt Description"
                        id="description"
                        onChange={handleOnchange}
                    />
                </div>
                <button
                    type="submit"
                >Add New Blog</button>
            </form>
        </div>
    )
}
export default AddNewBlog