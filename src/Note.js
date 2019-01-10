import React, { Component } from 'react';

class Note extends Component {

  handleChange(e) {
    console.log(e.currentTarget.value)
    this.props.updateNote(this.props.id, e.currentTarget.value)
  }
  render() {
    return (
      <div>
        <textarea 
          onChange={e => this.handleChange(e)}
          value={this.props.note.text}></textarea>
      </div>
    );
  }
}

export default Note;
