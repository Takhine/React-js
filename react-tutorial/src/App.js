import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import Form from './Form';

// This Component is an example on how to use PropTypes
class SayHello extends Component{
  static propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
  }
  render(){
    const {firstName,lastName}=this.props
    return(
      <div>
        Hello {firstName} {lastName}
      </div>
    )
  }
}
function Box({style,size,className='',...props}){
  const sizeClass= size ? `box--${size}`:''
  return (
    <div
      className={`box ${className} ${sizeClass}`}
      style={{paddingLeft: 20,border:'solid green',...style}}
      {...props}
    >
      {props.value}
      </div>
  )
}
const element =
  (
    <>
    <Box size="small" value="small box" style={{color:'blue'}}>     
    </Box>
    <Box size="medium" value="medium box" style={{color:'pink'}}>     
    </Box>
    <Box size="large" value="large box" style={{color:'orange'}}>     
    </Box>
    </>
  )
class App extends Component {
	state = {
		characters: [],
	};

	removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character]});
}
  render() {
  	const {characters} = this.state;

  	// Now, we're going to pass the data through to the child component (Table) with properties,
  	//  kind of how you might pass data through using data- attributes.
  	// We can call the property whatever we want, as long as it's not a reserved keyword,
  	// so I'll go with characterData. The data I'm passing through is the characters variable,
  	// and I'll put curly braces around it as it's a JavaScript expression.
    return (
    	<div className="container">
        <h1>React Begginer Practice Sandbox</h1>
        <h2>Styling Example</h2>
        {element}
        <h2>PropTypes Example</h2>
        <SayHello firstName={'Keth'}/>
        <h2>React Example using states and props</h2>
        <p>Add a character with a name and a job to the table.</p>
        <Table 
          characterData={characters}
          removeCharacter={this.removeCharacter} />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
  		</div>
    )
  }
}

export default App

// We export the component as App and load it in index.js. It's not mandatory to separate components into files
// but an application will start to get unwieldy and out-of-hand if you don't.