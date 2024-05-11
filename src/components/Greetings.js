import React from 'react'
import MyDataHelps  from '@careevolution/mydatahelps-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

class Greetings extends React.Component {
    constructor(props) {
        super(props)

        let greet = 'Good Morning'
        let greetIcon = <FontAwesomeIcon icon={faSun} />
        // Get the current time of the day.
        let date = new Date()
        let hours = date.getHours()
        if(hours < 12) {
            greet = 'Good Morning'
            greetIcon = <FontAwesomeIcon icon={faSun} />
        }
        if(hours >= 12) {
            greet = 'Good Afternoon'
            greetIcon = <FontAwesomeIcon icon={faSun} />
        }
        if(hours >= 17) {
            greet = 'Good Evening'
            greetIcon = <FontAwesomeIcon icon={faMoon} />
        }

        this.state = {
            name: '',
            greet: greet,
            greetIcon: greetIcon,
        }

   }

    componentDidMount() {
        // Get the participant first name
        MyDataHelps.getParticipantInfo().then((result)=>{
            this.setState({name: result['demographics']['firstName']})
        })
    }

    render() {
        return (
            <div><h3>{this.state.greetIcon} {this.state.greet} {this.state.name}</h3></div>
        )
    }
}

export default Greetings
