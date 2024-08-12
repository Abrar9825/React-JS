import { useState } from "react"
import { loginFormElement } from "../../config"
import Commonform from "../commonForm"

const initialFormData = {
    email: '',
    password: ''
}
function LoginComponent() {
    const [loginFormData, setLoginFormData] = useState(initialFormData)
    
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(loginFormData);

        // database and api logic
        setLoginFormData(initialFormData)

    }

    return (
        <div>
            <h1>Login Component</h1>
            <Commonform
                formData={loginFormData}
                setFormData={setLoginFormData}
                formControls={loginFormElement}
                buttonText={"login"}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginComponent