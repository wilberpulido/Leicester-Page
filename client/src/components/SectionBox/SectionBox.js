import React from 'react';
import './SectionBox.css';

function SectionBox(props){

  const style = props.style;

  return(<div className = "sectionBox scrollBox" style = {style} >
    {props.children}
  </div>
)


}

export default SectionBox;