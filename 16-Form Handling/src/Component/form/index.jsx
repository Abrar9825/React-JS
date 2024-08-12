import { useState } from "react"




export default function FormComponent() {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    // function handleInputChnage(event) {
    //     const { value } = event.target
    //     setNameValue(value)
    // }
    // function handleEmailChange(event) {
    //     const { value } = event.target
    //     setEmailValue(value)
    // }
    
    function handleSubmit(event) {
        event.preventDefault()
        
        // call the api and pass the name value
        console.log(nameValue, emailValue);

    }

    function handleOnChange(event) {
        const { name, value } = event.target
        // console.log(event.target.name);
        // console.log(event.target.value);

        setFormData({
            ...formData,
            [name]: value
        })

    }
    console.log(formData);

    return (
        <div>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleOnChange} />

                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your email"
                    value={formData.email}
                    onChange={handleOnChange} />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}