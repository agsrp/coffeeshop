import { useState } from "react";


function SortingComponent() {

    return (
        <>
        <button onClick={() => handleSort('asc')}>Ordenar por precio (menor a mayor)</button>
        <button onClick={() => handleSort('desc')}>Ordenar por precio (mayor a menor)</button>
        </>
    );
  }
  
  export default SortingComponent