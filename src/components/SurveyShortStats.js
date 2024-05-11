import React from 'react'
import MyDataHelps from '@careevolution/mydatahelps-js'

class SurveyShortStats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      completed : 0,
      lastCompleteDate : '',
    }
  }

  componentDidMount() {
    MyDataHelps.querySurveyAnswers({
      surveyName: this.props.surveyName
    }).then((result)=>{
      let count = result['surveyAnswers'].length
      this.setState({completed: count})

      if (count > 0) {
        let lastDate = result['surveyAnswers'][count-1]['date']
        let date = new Date(lastDate)
        // Form the cool string
        let str = 'Last completed on '
        str += date.toLocaleDateString()+' at '
        str += date.toLocaleTimeString()

        this.setState({lastCompleteDate: str})
      }
    })
  }

  render() {
    return (
      <div style={{
        fontSize: '0.75em',
        color: '#757575',
      }}>
        <div>{this.state.lastCompleteDate}</div>
      </div>
    )
  }
}

export default SurveyShortStats
