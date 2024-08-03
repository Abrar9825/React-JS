import { useEffect, useState } from "react";

export default function Users() {
    const [userList, setUserList] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            if (result?.users) {
                setUserList(result.users);
            } else {
                setUserList([]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPending(false);
        }
    }
  
    // function handleFetchListOfUser() {
    //     fetchAllUsers();
    // }

    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);

    if (pending) return <h1>Fetching Users, Please Wait!</h1>;

    return (
        <div>
            <h1>All Users List</h1>
            <button onClick={fetchAllUsers}>FetchList of Users</button>
            <ul>
                {userList.length > 0 ? (
                    userList.map((userItem) => (
                        <li key={userItem.id}>
                            <p>{userItem.firstName} {userItem.lastName}</p>
                        </li>
                    ))
                ) : (
                    <h1>No Users Found</h1>
                )}
            </ul>
        </div>
    );
}
