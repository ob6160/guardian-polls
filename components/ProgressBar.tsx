import React from "react";

const ProgressBar = (props:{answer: string, bgcolor:string, completed:number }) => {
    const { answer, bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '80%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      transition: 'width 1s ease-in-out',

    }
  
    const labelStyles = {
      padding: 5,
      color: 'black',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed.toFixed(0)}%`} {`${answer}`} </span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;