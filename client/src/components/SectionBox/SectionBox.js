import React from 'react';
import './SectionBox.css';

function SectionBox(props){

  let style = props.styleSectionBox;

  return(<div className = "sectionBox scrollBox" style = {style} >
    {props.children}
  </div>
)


}

export default SectionBox;