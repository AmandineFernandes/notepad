// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';

function MarkdownInput(){
    const [value, setValue] = useState('');

    const onChange = (event) => { //met à jour l'état lorsque la valeur d'entrée change
        setValue(event.target.value);
    };

    return (
        <>
        <input style={{marginTop: '20px', height: 50, color: 'white', borderColor: 'gray', borderWidth: 1 }} type="text" value={value} onChange={onChange} placeholder='Ma première note' /> 
        <div>{value}</div>
            <textarea 
            rows="20"
            value={value}
            onChange={onChange}
            placeholder='Tapez votre note ...'
            style={{ marginTop: '20px'}}
            />
        </>  
    );
}

export default MarkdownInput;