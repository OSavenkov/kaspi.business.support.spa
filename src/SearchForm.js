import React from 'react';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.parentCallback(event.target.value);
  }
  
  render() {
    return (
      <form>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </label>
      </form>
    );
  }
}