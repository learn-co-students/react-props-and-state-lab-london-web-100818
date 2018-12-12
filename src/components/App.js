import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newFilter) => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  onFindPetsClick = () => {
    this.fetchPets()
      .then(resp => 
        this.setState({
          pets: resp
        })
      )
  }

  fetchPets = () => {
    let q = ''
    const filter = this.state.filters.type
    if (filter === 'all') {
    
    } else {
      q = `?type=${filter}`
    }
    return fetch(`/api/pets${q}`)
      .then(resp => resp.json())
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
     this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType} 
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
