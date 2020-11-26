import React from 'react';
import './SectionBox.css';

function SectionBox(props){

  const styleBox = props.styleBox;

  return(<div className = "sectionBox scrollBox" style = {styleBox} >
    {props.children}
  </div>
)


}

export default SectionBox;