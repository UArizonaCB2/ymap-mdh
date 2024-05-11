import React from 'react'
import styles from './WeekHolder.module.css'
import WeekCard from './WeekCard'

import birthday from '../assets/birthday.png'

class WeekHolder extends React.Component {
  constructor(props) {
    super(props)

    this.myvar = "hello world"
  }

  render() {
    return (
      <div className={styles.card}>
        <h3>{this.props.title}</h3>
        <WeekCard imageSrc={birthday} title='Mood Survey'/>
      </div>
    )
  }
}

export default WeekHolder
