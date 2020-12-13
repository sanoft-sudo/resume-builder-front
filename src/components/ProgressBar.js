import React from 'react';

function ProgressBar(props) {
const {bgcolor, completed} = props;
console.log("completed", completed);

const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#fff",
    borderRadius: 50,
    marginBottom: 8
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
    fontSize:13,
    color: 'white',
    fontWeight: 'bold'
  }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>
                    {`${completed}%`}
                </span>
            </div>
        </div>
    )
}

export default ProgressBar
