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

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;