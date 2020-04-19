const Button = ({ 
  buttonContent = 'I just work!', 
  activate
}) => (
  <button onClick={activate}>
    {buttonContent}
  </button>
)
