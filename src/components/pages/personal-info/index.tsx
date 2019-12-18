import React, { useState } from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createUser, User} from '../../../actions/users';
import {InputSection} from '../../common/form-section/input-section';
import {isRequired, isValidEmail} from '../../../utils/validators';
import {uuidv4} from '../../../utils/helpers';

const PersonalInfo: React.FC<RouteComponentProps> = ({history}) =>{ 
    const dispatch = useDispatch();
    //initial state
    const [firstName, setFirstName] = useState<string>('');
    const [middleInitial, setMiddleInitial] = useState<string | undefined>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    //clear state and backing to initial route
    const clearState = (): void => {
        setFirstName('');
        setMiddleInitial('');
        setLastName('');
        setEmail('');
    }

    const doCancel = (): void => {
        clearState();
        history.push('/');
    }
    //saving on the state
    const doSave = (): void => {
        if(validateAll()) {
            const user: User = {
                id: uuidv4(),
                firstName,
                middleInitial,
                lastName,
                email
            };
            dispatch(createUser(user));
            clearState();
            history.push(`/ask/music-preference/${user.id}`);
            return;
        }

        alert("provide valid information, check for errors");
    }
    //simple validate function
    const validateAll = (): boolean => {
        const hasError = document.getElementsByClassName('has-error');
        return hasError.length === 0;
    }

    return (
        <div className="common-container">
            <h1 className="form-title">Provide your personal information</h1>
            <InputSection 
                required 
                label="What's your first name?"
                onError={!isRequired(firstName)}
                errorMessage="this field is required"
                inputProps={{
                    name: 'first-name',
                    placeholder: 'First name',
                    value: firstName,
                    onChange: (e: any) => setFirstName(e.target.value)
                }} />
            <InputSection 
                label="Middle initial"
                inputProps={{
                    name: 'middle-initial',
                    placeholder: 'Middle initial (optional)',
                    value: middleInitial,
                    onChange: (e: any) => setMiddleInitial(e.target.value)
                }} />
            <InputSection 
                required 
                label="What's your last name?"
                onError={!isRequired(lastName)}
                errorMessage="this field is required"
                inputProps={{
                    name: 'last-name',
                    placeholder: 'Last name',
                    value: lastName,
                    onChange: (e: any) => setLastName(e.target.value)
                }} />
            <InputSection 
                required 
                label="What's your e-mail?"
                onError={!isRequired(email) || !isValidEmail(email)}
                errorMessage="this field is required and need to be a valid email"
                inputProps={{
                    name: 'email',
                    placeholder: 'E-mail',
                    value: email,
                    onChange: (e: any) => setEmail(e.target.value)
                }} />
            <div className="button-section">
                <button className="cancel-button" onClick={doCancel}>Cancel</button>
                <button className="forward-button" onClick={doSave}>Next</button>
            </div>
        </div>
    );
}

export default PersonalInfo;