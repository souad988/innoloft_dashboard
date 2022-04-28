import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import style from './productInfo.module.css';
import { setAttribute } from '../../store/reducer';

function AttributeList({ ...props }) {
  const dispatch = useDispatch();
  const [newAttribute, setNewAttribute] = useState('');
  const [attribute, values] = Object.entries(props)[0];
  const defaultOption = attribute;
  const [options, setOptions] = useState(values.length > 0 ? values.map((item) => item.name) : []);

  const addToList = async () => {
    if (!options.includes(newAttribute) && newAttribute !== '') {
      setOptions([newAttribute, ...options]);
      setNewAttribute('');
      dispatch(setAttribute(attribute, [...values, { id: values.length, name: newAttribute }]));
    } else {
      setNewAttribute('it already exists');
    }
  };

  return (
    <div className={style.attributeContainer}>
      <strong>{attribute}</strong>

      <div className={style.addAttribute}>
        <input
          placeholder="add new one"
          value={newAttribute}
          onChange={(e) => setNewAttribute(e.target.value)}
        />
        <button type="button" onClick={addToList} aria-label="add"><i className="fas fa-plus" /></button>
      </div>
      <Dropdown options={options} value={defaultOption} placeholder={attribute} />
    </div>
  );
}

export default AttributeList;
