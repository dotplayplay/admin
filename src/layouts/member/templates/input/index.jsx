import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { LiaTimesSolid } from 'react-icons/lia';

const ChoInput = (props) => {
  const [inputValue, setInputValue] = useState(props.value? props.value : '');
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };


  return (
    <div className='relative w-full flex justify-center text-center items-center'>
      <label 
        htmlFor={props.label} 
        className="absolute top-[-12px] left-[30px] px-3 bg-white text-slate-400 text-[15px] font-[600] tracking-[2px]"
      >
        {props.label.toUpperCase()}
      </label>
      <input 
        id={props.id}
        type={props.type? props.type : "text"} 
        value={inputValue} 
        placeholder={props.placeholder? props.placeholder : props.value} 
        name={props.name? props.name : ''}
        onChange={handleInputChange}
        onFocus={()=>setInputFocused(true)}
        onBlur={()=>setInputFocused(false)}
        className='w-full pl-3 h-[50px] border-[2px] rounded-[10px] text-[16px] text-slate-500 focus:outline-green-200'
      />
      {(inputFocused && inputValue) && (<button className="absolute right-[10px] h-max" onMouseDown={()=>setInputValue('')}>
        <LiaTimesSolid className="text-[15px]" />
      </button>)}
    </div>
  )
}

ChoInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ChoInput;