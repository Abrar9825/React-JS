import UseFetch from "../../Hooks/use-fetch"

export default function CommentsList() {

    const { data, loding } = UseFetch('https://dummyjson.com/comments')
    if (loding) return <h1>Fetching comments! Please wait</h1>;


    return (
        <div>
            <ul>
                {
                data?.comments?.length > 0
                    ?
                    data?.comments.map((commentItem) => (
                        <div>
                            <label>{commentItem?.body}</label>
                            <p>{commentItem?.likes}</p>
                        </div>
                    ))
                    :
                    null}
            </ul>
        </div>
    )
}