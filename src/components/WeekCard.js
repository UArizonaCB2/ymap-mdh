import React from 'react';
import styles from './Card.module.css'; // Import CSS module
import {Button} from '@careevolution/mydatahelps-ui'
import {SingleSurveyTask} from '@careevolution/mydatahelps-ui'
import SurveyShortStats from './SurveyShortStats';
import MyDataHelps from '@careevolution/mydatahelps-js';

function WeekCard({interventions}) {
  return interventions.map(renderIt)
}

function renderIt(task) {
  return (
    <div>
      <SingleSurveyTask
        onClick={() => MyDataHelps.startSurvey(task.survey)}
          task={{
            status: 'incomplete',
            surveyDescription: task.description,
            surveyDisplayName: task.title
      }}/>
      <div style={{
          margin: '0 0 16px 16px'
      }}>
        <SurveyShortStats surveyName={task.survey}/>
      </div>
    </div>
  )
}

export default WeekCard;
