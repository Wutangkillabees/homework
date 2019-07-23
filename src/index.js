import React from 'react'
import { render } from 'react-dom'
// Import React-JSS
import injectSheet from 'react-jss'
 
// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const styles = {
    myButton: {
        color: 'green',
        margin: { // jss-expand gives more readable syntax
        top: 5, // jss-default-unit makes this 5px
        right: 0,
        bottom: 0,
        left: '1rem'
        },
    },
    myParagraph: {
        color: 'red',
    },
    myInput: {
        backgroundColor: 'lightblue',
    },
}
 
// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
class Input extends React.Component {
    render() {
      return <input className={this.props.classes.myInput}></input>;
    }
  }
class Button extends React.Component { 
    render() { 
        return ( 
            <button className={this.props.classes.myButton}> 
            Button123 
            </button> 
        ); 
    } 
} 
class Paragraph extends React.Component {
    render() {
      return <p className={this.props.classes.myParagraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </p>;
    }
  }
  
 
// Finally, inject the stylesheet into the component.
const StyledButton = injectSheet(styles)(Button)
const StyledParagraph = injectSheet(styles)(Paragraph)
const StyledInput = injectSheet(styles)(Input)
// You can also export the component with
// export default injectSheet(styles)(Button)
const App = () => (
    <React.Fragment>
        <StyledButton />
        <StyledInput />
        <StyledParagraph />
    </React.Fragment>
  )

render(<App />, document.getElementById("root"));