import React from 'react'



const debounce = function(callback, time) {
  let timeRef = null

  const returnFunction = () => {
    setTimeout.clear(timeRef)

    timeRef = setTimeOut(() => {
      //callback/API call
      callback()
    }, time)
  }

  return returnFunction
}

const handleMouseMove = debounce((ev) => {
  // Do stuff with the event!

}, 250);


const onChangeCb = function() {}


<Component onChange={handleMouseMove}/>