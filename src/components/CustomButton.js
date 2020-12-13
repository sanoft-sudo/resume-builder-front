import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function CustomButton() {
    return (
        <div>
            <button className="custom__button" type="submit" label={<ExpandLessIcon/>}/>
        </div>
    )
}

export default CustomButton
