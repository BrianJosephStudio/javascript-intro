import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { validateInputValue } from '../util/inputValidation/validateFormValue';
import { InvalidInputAlert } from './InvalidInputAlert';
import { UserDetailsContext } from '../util/context/UserDetailsContext';

interface FormData {
    name: string;
    email: string;
    phone: string;
}

export const FormGroup = ({
    validateInput = false,
    title,
    id
}: {
    validateInput: boolean
    title: string
    id: string
}) => {
    //@ts-ignore
    const { formData, setFormData, checkInputs } = useContext(UserDetailsContext)
    const [isValid, setValid] = useState(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (validateInput) {
            const isInputvalid = validateInputValue(e)
            if (isInputvalid) {
                setValid(true)
            } else {
                setValid(false)
            }
        }

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        checkInputs()
    },[isValid])

    return (
        <div className="form-group">
            <div style={{ display: "flex", alignContent: 'center' }}>
                <label htmlFor="name">{title}:</label>
                {validateInput &&
                    <InvalidInputAlert visible={!isValid}></InvalidInputAlert>
                }
            </div>
            <input type="text" id={id} name={id} value={formData[id]} onChange={handleChange} required />
        </div>
    )
}