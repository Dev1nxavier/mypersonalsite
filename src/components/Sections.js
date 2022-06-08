import React from "react";
import SectionItem from "./SectionItem";

const Sections = ({ allPosts }) => {

  console.log(allPosts);
  
  return(
    <>
      {allPosts.map((post,index)=>(
        <SectionItem post={post} index={index}/>
      ))}
    </>
  )
}

export default Sections;
