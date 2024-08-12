import { useState } from "react";
import Commonform from "../commonForm";
import { registerFormElement } from "../../config";

const initialRegisterFormData = {
    name: '',
    email: '',
    password: ''
};

function RegisterComponent() {
    const [registerFormData, setRegisterFormData] = useState(initialRegisterFormData);

    function handleRegistrationOnSubmit(event) {
        event.preventDefault();
        console.log(registerFormData);

        // Implement database and API logic here
        setRegisterFormData(initialRegisterFormData);
    }

    return (
        <div>
            <h1>Register Component</h1>
            <Commonform
                formControls={registerFormElement}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                buttonText={'Register'}
                handleSubmit={handleRegistrationOnSubmit}
            />
        </div>
    );
}

export default RegisterComponent;
