import React,{useState} from 'react';

export default function() {
const [timesClicked,setTimesClicked]=useState(0)

  const handleClick = () => {
    setTimesClicked(timesClicked+1)
  }

    return (
      <button onClick={handleClick}>{timesClicked}</button>
    );
  
}