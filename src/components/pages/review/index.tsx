import React, {useEffect, useState} from 'react';
import {RouteComponentProps, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {User} from "../../../actions/users";
import {Service} from "../../../reducers/services";
import './style.css';

const Review: React.FC<RouteComponentProps>  = ({history}) => {
    const servicesArray = (state: {services: Array<Service>}) => state.services;
    const services = useSelector(servicesArray);
    const usersArray = (state: {users: Array<User>}) => state.users;
    const users = useSelector(usersArray);
    //param passed by previous route
    const { id } = useParams();
    //initializing state
    const [user, setUser] = useState<User | null | undefined>(null);
    const [usedServices, setUsedServices] = useState<string>('');

    useEffect(() => {
        if ((id || '').length > 0 && user?.id !== id) {
            const newUser: any = users.find(u => u.id === id);
            setUser(newUser);
            setUsedServices(services.filter(s => newUser?.votes.includes(s.key)).map(s => s.name).join(', '));
        }
    }, [id, users, services, user]);

    function clearState() {
        setUser(null);
        setUsedServices('');
    }

    function doSave() {
        clearState();
        history.push('/')
    }
    return (
        <div className="common-container">
            <h1 className="form-title">Review your preferences</h1>
            <div className="review-form">
                <div><strong>First name:</strong> {user?.firstName}</div>
                <div><strong>Middle initial:</strong> {user?.middleInitial}</div>
                <div><strong>Last name:</strong> {user?.lastName}</div>
                <div><strong>E-mail:</strong> {user?.email}</div>
                <div><strong>Used services:</strong> {usedServices}</div>
            </div>
            <div className="button-section">
                <button className="forward-button" onClick={doSave}>Done</button>
            </div>
        </div>
    )
}

export default Review;