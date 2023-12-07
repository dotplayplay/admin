import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const ChoSwitch = (props) => {
  const [isChecked, setIsChecked] = useState(Boolean(props.value));

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (props.onChange) {
      props.onChange(newValue);
      console.log('changing input from input component');
    }
  }
  useEffect(() => {
    console.log('input component');
  }, []);
  

  return (
    <div 
      className={`relative w-full flex justify-between items-center py-3 px-2 rounded-[5px] border-[2px] ${isChecked? props.borderColor : 'border-slate-200 bg-slate-50'} cursor-pointer transition-all duration-150 select-none`} 
      onClick={handleToggle}
    >
      <p className={`${isChecked? props.textColor : 'text-slate-400'} px-1 sm:px-3 text-[13px] md:text-[15px] font-[600] uppercase`}>{props.label}</p>
      <div className={`${isChecked? props.backgroundColor : 'bg-slate-300'} flex items-center w-[44px] h-[26px] px-[2px] rounded-[20px] transition-all duration-150`}>
        <input 
          checked={isChecked} 
          type='checkbox' 
          className='hidden'
        />
        <div 
          className={`${isChecked?  props.thumbColor + ' transform translate-x-[19px]' : 'bg-white'} min-w-[22px] w-[22px] h-[22px] rounded-[50%] transition-all duration-150`}
        ></div>
      </div>
    </div>
  )
}

ChoSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  action: PropTypes.Boolean,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  thumbColor: PropTypes.string,
};

ChoSwitch.defaultProps = {
  action: true,
  backgroundColor: 'bg-green-200',
  borderColor: 'border-green-200',
  textColor: 'text-green-400',
  thumbColor: 'bg-green-400',
}

export default ChoSwitch;