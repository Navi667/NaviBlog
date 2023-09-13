import React from 'react';
import "./write.css";
import img from "../../../assets/writeBgc.jpg"

export default function write() {
  return (
    <div className='write'>
      <img className="writeBgc" alt='' src={img}></img>
        <form className='writeForm'>
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
            <i className="writeIcon fa-solid fa-circle-plus fa-xl"></i>
            </label>
            <input type='file' id='fileInput' style={{display: 'none'}}></input>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
          </div>
          <div className='writeFormGroup'>
            <textarea
            placeholder='Tell your story...'
            type="text"
            className='writeInput writeText'
            ></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
