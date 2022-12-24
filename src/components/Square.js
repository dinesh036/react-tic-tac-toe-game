import React from 'react'

export default function Square(props) {
    //const props = null;
  return (
    <button className={props.value?"btn disabled":'btn'} onClick={props.onClick}>
        {props.value}
    </button>
  )
}
