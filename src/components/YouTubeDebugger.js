import React,{useState} from 'react';

export default function() {
  const [errors,setErrors]=useState([])
  const [user,setUser]=useState(null)
  const [settings,setSettings]=useState({
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      });

  const handleChangeBitrate = () => {
      setSettings({...settings,bitrate:12});
  };

 const handleChangeResolution = () => {
   setSettings({...settings,video:{resolution:"720p"}})
 }

    return (
      <div>
        <button className="bitrate" onClick={handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  
}
