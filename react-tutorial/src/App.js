import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

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
  this.setState({ characters: [...this.state.characters, character] })
}
  render() {
  	const characters = []

  	// Now, we're going to pass the data through to the child component (Table) with properties,
  	//  kind of how you might pass data through using data- attributes.
  	// We can call the property whatever we want, as long as it's not a reserved keyword,
  	// so I'll go with characterData. The data I'm passing through is the characters variable,
  	// and I'll put curly braces around it as it's a JavaScript expression.
    return (
    	<div className="container">
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
    <Form handleSubmit={this.handleSubmit} />

  		</div>
    )
  }
}

export default App

// We export the component as App and load it in index.js. It's not mandatory to separate components into files,
// but an application will start to get unwieldy and out-of-hand if you don't.