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
      aria-label={accessibleLabel || buttonContent}
      aria-disabled={isDisabled ? 'true' : 'false'}
      onClick={activate}
      onKeyPress={keyPressHandler}>
      {buttonContent}
    </div>
  )
}
