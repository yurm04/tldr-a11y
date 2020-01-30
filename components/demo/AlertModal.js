import React, { useRef, useEffect } from 'react'

const AlertModal = ({ 
  alertTitle='',
  alertMessage='',
  closeHanlder,
  closeText 
}) => {
  // create an empty ref
  const buttonRef = useRef(null)
  
  useEffect(() => {
    // focuses the keyboard on the modal button when component renders
    buttonRef.current.focus()
  }, [])

  return (
    <div 
      className="modal"
      role="alertdialog"
      aria-labelledby="alertTitle"
      aria-describedby="alertMessage">
      <h2 id="alertTitle">{alertTitle}</h2>
      <p id="alertMessage">{alertMessage}</p>
      <button
        onClick={closeHanlder}
        ref={buttonRef}>{closeText}</button>
    </div>
  )
}
