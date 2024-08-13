import { useForm } from "react-hook-form";

export default function ReactHooksForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function onSubmitForm(data) {
        console.log(data);
        reset()
    }

    return (
        <div>
            <h1>Hello React Hooks Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        {...register('email', { required: "Email is required" })}
                        type="text"
                    />
                    {errors.email && <p style={{ color: 'red', fontWeight: 'bolder' }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        {...register('password', {
                            required: "Password is required",
                            minLength: { value: 3, message: "Password should be at least 3 characters" },
                            maxLength: { value: 5, message: "Password should not exceed 5 characters" }
                        })}
                        type="password"
                    />
                    {errors.password && <p style={{ color: 'red', fontWeight: 'bolder' }}>{errors.password.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
