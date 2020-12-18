import React from 'react';

function ProgressBar(props) {
const {bgcolor, completed} = props;

const containerStyles = {
    height: 13,
    width: '80%',
    backgroundColor: "#fff",
    borderRadius: 50,
    marginBottom: 8,
    position: 'relative'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    paddingRight: 15,
    fontSize:10,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right:40,
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
