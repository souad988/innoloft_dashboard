import React, {useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import style from './productInfo.module.css'
import { useDispatch } from 'react-redux';
import {setAttribute} from '../../store/reducer'


function AttributeList({...props}) {
  const dispatch = useDispatch()
  const [newAttribute, setNewAttribute] = useState('')
  const [open,setOpen] = useState(false)
  const [attribute,values ] = Object.entries(props)[0]
  const [defaultOption,setDefaultOption]= useState(attribute)
  const [options, setOptions]= useState(values.length>0?values.map(item=>item.name):[]) 

  const addToList = async() => {
    if(!options.includes(newAttribute)){
      setOptions([newAttribute,...options])
      setNewAttribute('')
      dispatch(setAttribute(attribute,[...values,{id:values.length,name:newAttribute}]))
    }else {
      setNewAttribute('it already exists')
    }
  }

  return (
    <div className={style.attributeContainer}>
      <strong>{attribute}</strong>

     <div className={style.addAttribute} > 
       <input placeholder='add new one' value={newAttribute} 
        onChange={e=>setNewAttribute(e.target.value)} />
       <i className="fas fa-plus" onClick={addToList}></i></div>
      <Dropdown open={open} options={options}  value={defaultOption} placeholder={attribute} />
    </div>
  )
}

export default AttributeList
