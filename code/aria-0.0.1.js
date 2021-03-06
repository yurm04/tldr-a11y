const Modal = ({ 
  title,
  modalText
}) => {
  
  /* ... Some more code ... */

  return (
    <div
      className={`modalContainer ${isOpen ? '' : 'hidden'}`}
      role="dialog"
      aria-modal={isOpen ? "true" : "false"}
      aria-labelledby="modalTitle">
        <h2 id="modalTitle">{title}</h2>
        <p className="modalContent">{modalText}</p>
    </div>
  )
}
