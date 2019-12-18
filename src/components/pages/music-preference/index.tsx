import React, {useState} from 'react';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Service} from '../../../reducers/services';
import {doVote} from '../../../actions/services';
import {updateUserVote} from '../../../actions/users';
import './style.css';

const MusicPreference: React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch();
    const servicesArray = (state: {services: Array<Service>}) => state.services;
    const services = useSelector(servicesArray);
    //initializing state
    const [votes, setVotes] = useState<Array<string>>([]);
    //param passed by previous route
    const { id } = useParams();

    const clearState = (): void => {
        setVotes([]);
    }

    const doCancel = (): void => {
        clearState();
        history.push('/');
    }

    const setVote = (key: string): void => {
        const uniqueArray: Set<string> = new Set([...votes, key]);
        if(votes.indexOf(key) > -1) uniqueArray.delete(key);
        setVotes(Array.from(uniqueArray));
    }

    const doSave = (): void => {
        if((votes || []).length > 0 && (id || '').length > 0) {

            dispatch(doVote({ votes }));
            dispatch(updateUserVote({ id, votes }));
            clearState();
            history.push(`/review/${id}`);
            return;
        }
        alert('Choose least one item')
    }

    return (
        <div className="common-container">
            <h1 className="form-title">Which streaming services do you use?</h1>
            <div className="check-section">
            {services && (services.map((s: Service) => (
                <div className="check-area" key={s.key}>
                    <input 
                        className="check-options" 
                        type="checkbox" 
                        value={s.key}
                        onChange={(e: any) => setVote(e.target.value)} />
                    <label>{s.name}</label>
                </div>
            )))}
            </div>
            <div className="button-section">
                <button className="cancel-button" onClick={doCancel}>Cancel</button>
                <button className="forward-button" onClick={doSave}>Next</button>
            </div>
        </div>
    )
}

export default MusicPreference;