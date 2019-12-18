import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Service} from '../../../reducers/services';
import './style.css';

export const DataPreview: React.FC = () => {
    const servicesArray = (state: {services: Array<Service>}) => state.services;
    const services = useSelector(servicesArray);
    const [serviceList, setServiceList] = useState<Array<Service>>([]);

    useEffect(() => {
        console.log(services);
        if ((services || []).length) {
            setServiceList(services);
        }
    }, [services]);

    return (
        <div className="data-preview">
            {serviceList && serviceList.map((s: Service) => (
                <div className="data-item" key={s.key}>
                    {s.logo && (<div className="service-logo"><img src={s.logo} alt={s.name} /></div>)}
                    <div className="service-name">{s.name}</div>
                    <div className="service-votes">votes: {s.votes}</div>
                </div>
            ))}
        </div>
    )
}