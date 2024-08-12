import CommonInput from "../commonInput";

const formTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
}

function Commonform({ formControls = [], formData, setFormData, buttonText, handleSubmit }) {

    function renderFormElement(getCurrentElement, index) {
        let content = null;
        const uniqueId = `${getCurrentElement.name}-${index}`; // Generate a unique ID

        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={uniqueId}
                    type={getCurrentElement.type}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })} />
                break;

            default:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    type={getCurrentElement.type}
                    id={uniqueId}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })} />
                break;
        }
        return content;
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                formControls?.length ?
                    formControls.map((singleFormElement, index) =>
                        renderFormElement(singleFormElement, index)
                    )
                    : null
            }
            <div style={{ marginTop: '12px' }}>
                <button type="submit">{buttonText || 'Submit'}</button>
            </div>
        </form>
    );
}

export default Commonform;
