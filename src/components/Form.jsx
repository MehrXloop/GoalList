import React, { useState } from 'react'

function Form() {
    const [title,setTitle] = useState('');
    const [des, setDes] = useState('')
    function fSetTitle (e){
        setTitle(e.value);
    } function fSetDes(e){
        setDes(e.value);
    }

    return (
        <div>
            <h1>Log Your Goals For This Bootcamp</h1>
            <div>
                <label htmlFor="title">Title</label>
                <input onChange={(e)=> fSetTitle(e)} value={title} type="text"  id='title'/>
            </div>
            <div>
                <label htmlFor="des">Description</label>
                <input type="text"  id='des' onChange={(e)=> fSetDes(e)} value={des}/>
            </div>
            <button onClick={fSave()}>Save</button>
        </div>
    )
}

export default Form