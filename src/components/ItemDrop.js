import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ItemDrop = ({ label, data, onChange, defaultValue, pos }) => (
  <div className="input-drop">
    <label>{label}</label>
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      style={{ width: 200 }}
    >
      {data.map((value, index) => (
        <Option pos={pos} key={index} value={value}>
          {value}
        </Option>
      ))}
    </Select>
  </div>
);

export default ItemDrop;
