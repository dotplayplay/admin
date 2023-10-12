import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const ChoSwitch = (props) => {
  const [isChecked, setIsChecked] = useState(Boolean(props.value));

  const handleToggle = () => {
    props.action === true? setIsChecked(!isChecked) : null;
  }

  return (
    <div 
      className={`relative w-full flex justify-between items-center py-3 px-2 rounded-[10px] border-[2px] ${isChecked? props.borderColor : 'border-slate-200 bg-slate-50'} cursor-pointer transition-all duration-150`} 
      onClick={handleToggle}
    >
      <p className={`px-3 ${isChecked? props.textColor : 'text-slate-400'} text-[15px] font-[600] tracking-[2px] uppercase`}>{props.label}</p>
      <div className={`${isChecked? props.backgroundColor : 'bg-slate-300'} flex items-center w-[45px] h-[26px] px-[2px] rounded-[20px] transition-all duration-150`}>
        <input 
          checked={isChecked} 
          type='checkbox' 
          className='hidden'
        />
        <div 
          className={`${isChecked?  'transform translate-x-[19px]' : ''} bg-green-50 min-w-[22px] w-[22px] h-[22px] rounded-[50%] transition-all duration-150`}
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
};

ChoSwitch.defaultProps = {
  action: true,
  backgroundColor: 'bg-green-400',
  borderColor: 'border-green-300',
  textColor: 'text-green-400',
}

export default ChoSwitch;