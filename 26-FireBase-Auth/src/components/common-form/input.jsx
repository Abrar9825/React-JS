import CommonInput from "../common-input";

const FormElementType = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
}

function CommonForm({ formControls = [], buttonText, formData, setFormData, onSubmit }) {

    function renderFormElements(getCurrentFormControl, getFormData) {
        let element = null;

        switch (getCurrentFormControl.componentType) {
            case FormElementType.INPUT:
                element = (
                    <CommonInput
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(event) => setFormData({
                            ...formData,
                            [getCurrentFormControl.name]: event.target.value
                        })}
                    />
                );
                break;

            default:
                element = (
                    <CommonInput
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(event) => setFormData({
                            ...formData,
                            [getCurrentFormControl.name]: event.target.value
                        })}
                    />
                );
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {formControls.map(singleFormControl => renderFormElements(singleFormControl, formData))}
            <button type="submit">{buttonText || 'submit'}</button>
        </form>
    );
}

export default CommonForm;
