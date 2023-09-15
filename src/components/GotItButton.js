function GotItButton(props) {
    return (
      <div className="got-it-button">
        <button type="button" onClick={props.actionProvider.handleGotIt}>
          Got it!
        </button>
      </div>
    );
  }
  
  export default GotItButton;
  