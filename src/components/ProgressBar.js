import React from 'react';

function ProgressBar(props) {
const {bgcolor, textColor, completed} = props;

const containerStyles = {
    height: 13,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 50,
    marginBottom: 8,
    
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    position: 'relative'
  }

  const labelStyles = {
    paddingRight: 15,
    fontSize:10,
    color: textColor,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right:0,
  }
    return (
        <div style={containerStyles}>
            <div className="bar__parent" style={fillerStyles}>
                <span className="bar__child" style={labelStyles}>
                    {`${completed}%`}
                </span>
            </div>
        </div>
    )
}

export default ProgressBar
