import GridLayout from 'react-grid-layout';
import React from 'react';
import './grid.css'

const Grid = ()=> {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 2},
      {i: 'b', x: 0, y: 5, w: 2, h: 2},
      {i: 'c', x: 0, y: 5, w: 2, h: 2},
      {i: 'd', x: 4, y: 0, w: 2, h: 2},
      {i: 'e', x: 4, y: 0, w: 2, h: 2},
      {i: 'f', x: 4, y: 0, w: 2, h: 2},
    ];
    return (
      <GridLayout className = "layout" layout={layout} cols={12} rowHeight={80}  width={1200}>
        <div key="a" className = "react-grid-item cssTransforms resizing example" style ={{ position: 'absolute',  transform: 'translate(10px, 10px)',top:'10px',border:'1px solid black'}}>
            <span className= "text">a</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
        <div key="b" className = "react-grid-item cssTransforms resizing example" style ={{ transform: 'translate(10px, 50px)', border:'1px solid black'}}>
            <span className= "react-grid-item text">b</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
        <div key="c" className = "react-grid-item cssTransforms resizing example" style ={{ transform: 'translate(10px, 100px)', border:'1px solid black'}}>
            <span className= "react-grid-item text">c</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
        <div key="d" className = "react-grid-item cssTransforms resizing example" style ={{ transform: 'translate(10px, 10px)', border:'1px solid black'}}>
            <span className= "react-grid-item text">d</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
        <div key="e" className = "react-grid-item cssTransforms resizing example" style ={{ transform: 'translate(10px, 50px)', border:'1px solid black'}}>
            <span className= "react-grid-item text">e</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
        <div key="f" className = "react-grid-item cssTransforms resizing example" style ={{ transform: 'translate(10px, 100px)', border:'1px solid black'}}>
            <span className= "react-grid-item text">f</span>
            <span className = "react-grid-item react-resizable-handle"></span>
        </div>
      </GridLayout>
    )
}

export default Grid