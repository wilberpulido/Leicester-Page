import React from 'react';

function SectionTitle(props){

    const style = {
      height: "60px",
      display: "flex",
      justifyContent: "center",
      itemsContent: "center",
      alignItems: "center",
    }
    const styleBox = {
      backgroundColor: "#0B56A4",
    }

    const styleTitle = {
      fontSize: "1.2rem",
      padding: "15px 55px",
      color: "white",
    }

return(
<div style = {style}>
  <div style = {styleBox}>
    <h3 style = {styleTitle}>
      {props.children}
    </h3>
  </div>
</div>
)

}

export default SectionTitle;