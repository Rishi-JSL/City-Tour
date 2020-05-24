import React from 'react';
import CitiesData from '../data/city_data';
import Tour from '../Tour/tour';

class Cities extends React.Component{
    state = {
      City : CitiesData
    }
    Del = (id) => {
      const updated_city_data = this.state.City.filter(item => item.id !== id)
      this.setState({
        City : updated_city_data
      })
    }
    render(){
      return(
        <section>
          {this.state.City.map(item => (
            <Tour key={item.id} info={item} del={this.Del} />
          ))}
        </section>
      )
    }
  }

export default Cities;