const Button = ({ 
  buttonContent = "So much work...", 
  accessibleLabel, 
  isDisabled = false, 
  activate 
}) => {
  
  const keyPressHandler = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      activate()
    }
  }

  return (
    <div
      tabindex="0"
      role="button"
      {...accessibleLabel && { 'aria-label': accessibleLabel }}
      aria-disabled={isDisabled ? 'true' : 'false'}
      onClick={activate}
      onKeyPress={keyPressHandler}>
      {buttonContent}
    </div>
  )
}
