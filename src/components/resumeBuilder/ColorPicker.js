import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import  "../../styles/ColorPicker.css";
import {useDispatch, useSelector} from "react-redux";
import { selectColor } from '../../stores/actions/colorAction';
function ColorPicker() {

    const colors = useSelector(state => state.colorReducer.colors)
    const dispatch = useDispatch()
    
    const handleClick = (bgC) =>{
        dispatch(selectColor(bgC))
    }

    return (
        <div className="colorpicker__container">
            <h5>Select color</h5>
            <div className="color__box">
                {colors.map(bgC =>(
                <IconButton key={bgC.id} onClick={e=>handleClick(bgC)}>
                    <RadioButtonCheckedIcon style={{color:bgC.colorSide}}/>
                </IconButton>
                ))}
               
            </div>
            
        </div>
    )
}

export default ColorPicker
