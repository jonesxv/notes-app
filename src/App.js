import React, { Component } from 'react';
//import './App.css';
import Note from './Note'
import { Button } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: {
        note1: {
          text: "This is my text"
        },
        note2: {
          text: "This is the text of note 2"
        }
      }
          
        
      }
    this.updateNote = this.updateNote.bind(this)
  }

  addNote = () => {
    this.setState(prevState => {
      const note = {
        text: ""
      }
      prevState.notes[`note${Date.now()}`] = note
      return { notes: prevState.notes }
    })
    console.log(this.state.notes)
  }

  updateNote(id, text) {
    const notes = {...this.state.notes}
    console.log(notes)
    notes[id].text = text
    this.setState({notes})
  }

  render() {
    const notes = Object.keys(this.state.notes).map(key => <Note key={key} id={key} updateNote={this.updateNote}
            note={this.state.notes[key]} />)
    return (
      <div>
          {notes}
          <Button onClick={this.addNote}>Add Note</Button>
      </div>
    );
  }
}

export default App;
