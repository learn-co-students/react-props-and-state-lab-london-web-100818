import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      onAdoptPet: this.props.onAdoptPet,
      pets: this.props.pets
    }
  }

  render() {
    return (
      <div className="ui cards">
        <ul> {
          this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.state.onAdoptPet}/> )
        } </ul>
      </div>
    )
  }
}

export default PetBrowser
