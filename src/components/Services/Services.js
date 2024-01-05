import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { servicesData } from '../../data/servicesData';

import './Services.css'
import SingleService from './SingleService/SingleService';

import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Services() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Skills</h1>
                    </div>
                    <div className="services-body">
                        <div className="services-bodycontainer">
                            {skillsData.map((skill, id) => (
                                <SingleService
                                key={id}
                                id={id}
                                title={skill}
                                icon={skillsImage(skill)}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services
