import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import { registerFormControls } from '../../config';
import CommonForm from '../../components/common-form/input';
import { updateProfile } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

function RegisterPage() {
    const { registerFormData, setRegisterFormData, registerWithFirebase, setloading } = useContext(AuthContext);

    const navigate = useNavigate()
    console.log(registerFormData);

    function handleRegisterFormSubmit(event) {
        event.preventDefault()
        registerWithFirebase().then((result) => {
            if (result.user) {
                updateProfile(result.user, {
                    displayName: registerFormData.name
                }).then(() => {
                    console.log(auth.currentUser.displayName);

                    if (auth.currentUser.displayName) {
                        setloading(false)
                        navigate('/profile')
                    }
                })
                // navigate('/profile')
            }

        }).catch(error => console.log(error))
    }

    return (
        <div className='w-full max-w-sm mx-auto rounded-lg shadow-md'>
            <div className='px-6 py-5 font-bold '>
                <h3>Welcome Back</h3>
                <p>Register Page</p>
                <CommonForm
                    formControls={registerFormControls}
                    formData={registerFormData}
                    setFormData={setRegisterFormData}
                    onSubmit={handleRegisterFormSubmit}
                    buttonText={'Save'}
                />
            </div>
        </div>
    );
}

export default RegisterPage;
