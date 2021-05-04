import React, {Component} from 'react';

class NewBeer extends Component {
state = {
  name: '',
  tagLine: '',
  description: '',
  firstBrewed: '',
  brewersTips: '',
  attenuationLevel: '',
  contributedBy: '',
}

handleChange = (event) => {
const {value, name} = event.target;

this.setState({
  [name]: value,
})
}
render() {
  return(
  <div>
    <form>
      <input type='text' name='name' placeholder='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
      <input type='text' name='name' placeholder='name' value={this.state.name} />
    <button type='submit'>Add New Beer</button>
    </form>
  </div>
  )
}

}

export default NewBeer;