import React from 'react';
import { useContext } from 'react';
import {NoteContext} from '../Context/NoteState';

const About =()=>{
    const context = useContext(...NoteContext);
    return(
        <div>
            This is a context Api Created by {context.name} using {context.email} Email
        </div>
    )
}

export default About;