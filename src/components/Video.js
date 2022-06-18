import React from "react"
import * as styled from '../styles/layout.module.css';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className= {styled.videoContainer}>
    <iframe
      className={styled.video}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{alignSelf:'center', ...props.styled}}
      
    />
  </div>
)
export default Video