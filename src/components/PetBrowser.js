import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">
        {this.props.pets.length !== 0 ? this.props.pets.map(pet => <Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>) : null}
      </div>
  }
}

export default PetBrowser
