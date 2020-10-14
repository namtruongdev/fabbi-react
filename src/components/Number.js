import React from 'react';
import { InputNumber } from 'antd';

const Number = ({ label, onChange }) => (
  <div className="input-number">
    <label>{label}</label>
    <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
  </div>
);

export default Number;
