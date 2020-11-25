import React from 'react';

function SectionBox(props){

  let style = props.styleSectionBox;

  return(<div className = "sectionBox" style = {style} >
    {props.children}
  </div>
)


}

export default SectionBox;