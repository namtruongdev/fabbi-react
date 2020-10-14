import React from 'react';
import { InputNumber } from 'antd';

const Number = ({ label, onChange, value }) => (
  <div className="input-number">
    <label>{label}</label>
    <InputNumber
      min={1}
      max={10}
      defaultValue={1}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Number;
