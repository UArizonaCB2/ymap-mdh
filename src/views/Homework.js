import React from 'react'
import { Card, SingleSurveyTask, CardTitle, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'
import Greetings from '../components/Greetings'
import WeekCard from '../components/WeekCard'
import MyDataHelps from '@careevolution/mydatahelps-js'
import SurveyShortStats from '../components/SurveyShortStats'

const interventions = [
    {week:1, tasks:[
        {title:'Inviting Relaxation', description:'Bring kind awareness to those parts of the body that hold stress.', survey:'YMAP - Relaxation',duration:5},
        {title:'Body Scan', description:'Become aware of your entire body--approach the experience with a sense of curiosity and openness', survey:'YMAP - Body Scan', duration:10},
        {title:'Mindful Walk', description: 'Become attentive to your thoughts, feelings, and physical sensations while also engaging with your surroundings ', survey:'YMAP -Mindful Walk', duration:4},
    ]},
    {week:2, tasks:[
        {title:'Gratitude', description:'Boost resilient and positive feelings by focusing on gratitude', survey:'YMAP - Gratitude', duration:10},
        {title:'Growing Stronger through Gratitude', description:'Explore reasons to feel grateful', survey:'YMAP - Growing Stronger through Gratitude', duration:7},
        {title:'Gratitude in Difficult Times', description:'Hold on to gratitude, even in difficult situations', survey:'YMAP - Gratitude in Difficult Times', duration:6},
        {title:'Mini-Gratitude', description:'Boost positive feelings through gratitude', survey:'YMAP - Mini-Gratitude', duration:3}
    ]},
    {week:3, tasks:[
        {title:'Compassionate Body Scan', description:'Check in to see what’s going on in your body with the “three C’s”: curiosity, care, and compassion', survey:'YMAP - Compassionate Body Scan', duration:7},
        {title:'Relax, Ground, and Clear', description:'Use your imagination to relax and feel more stable and grounded', survey:'YMAP - Relax Ground and Clear', duration:7},
        {title:'Being Kind to Your Body', description:'Connect to your entire body with warmth and kindness', survey:'YMAP - Being Kind to Your Body', duration:5},
        {title:'Body Scan 2', description:'Become aware of your entire body--approach the experience with a sense of curiosity and openness', survey:'YMAP - Body Scan 2', duration:10},
        {title:'Inviting Relaxation 2', description:'Bring kind awareness to those parts of the body that hold stress', survey:'YMAP - Inviting Relaxation 2', duration:5}
    ]},
    {week:4, tasks:[
        {title:'Anchoring the Breath', description:'Anchor awareness on the feeling of the breath', survey:'YMAP - Anchoring the Breath', duration:6},
        {title:'Mindful Breathing', description:'Approach your experience with openness and curiosity', survey:'YMAP - Mindful Breathing', duration:10},
        {title:'Following the Breath', description:'Strengthen focus by keeping attention on the breath', survey:'YMAP - Following the Breath',duration:5},
        {title:'Listen and Chill', description:'Transform listening into stress-relieving calm', survey:'YMAP - Listen and Chill', duration:7},
    ]},
    {week:5, tasks:[
        {title:'Three Minutes to Noting', description:'Note thoughts as they arise', survey:'YMAP - Three Minutes to Noting', duration:3},
        {title:'Noting', description:'Practice staying present when the mind jumps from thought to thought', survey:'YMAP - Noting', duration:10},
        {title:'Drop the Storyline', description:'Experience emotions without a storyline attached', survey:'YMAP - Drop the Storyline', duration:7},
        {title:'Mind like the Sky', description:'Watch thoughts and feelings as if they are clouds', survey:'YMAP - Mind like the Sky', duration:5},
        {title:'Mind like the Ocean', description:'Watch thoughts like they are waves in the ocean', survey:'YMAP - Mind like the Ocean', duration:5},
    ]},
    {week:6, tasks:[
        {title:'Surf the Waves of Emotions', description:'Learn to ride your emotions back to solid ground', survey:'YMAP - Surf the Waves of Emotions', duration:6},
        {title:'R.A.I.N.', description:'When you’re struggling with challenging feelings, or notice that you’re being hard on yourself, try R.A.I.N.—Recognizing, Allowing, Investigating, Not identifying', survey:'YMAP - R.A.I.N.', duration:5},
        {title:'Words in Body', description:'Better understand what you’re feeling, and where you feel it in your body', survey:'YMAP - Words in Body', duration:8},
        {title:'Be Your Inner Ally', description:'Tame your inner critic and treat yourself like you would a good friend', survey:'YMAP - Be Your Inner Ally', duration:9},
        {title:'Self-Compassion Break', description:'Step back, refuel, and find a deeper sense of strength and stability', survey:'YMAP - Self-Compassion Break', duration:8},
    ]},
    {week:7, tasks:[
        {title:'Just Like Me', description:'Foster understanding and connection by exploring what we all might have in common', survey:'YMAP - Just Like Me', duration:7},
        {title:'Just Like Me Too', description:'Relate positively and find common ground with anyone', survey:'YMAP - Just Like Me Too', duration:8},
        {title:'Commonality of Suffering', description:'Find more patience, empathy, and understanding as you learn to recognize how we’re all in the same boat', survey:'YMAP - Commonality of Suffering', duration:6},
    ]}
]

class Homework extends React.Component {

    constructor(props : any) {
        super(props)

        // Create the set of strings that will change based on the dates.
        this.state = {
            cohort: 'control'
        }

   }

    componentDidMount() {
        MyDataHelps.getParticipantInfo().then((result) => {
            const cohort = result['customFields']['cohort']
            this.setState({cohort: cohort})
        })
    }

    render() {

        /* If we don't have to show any of the mindfulness interventions,
         * we just return early.*/
        if(this.state.cohort === 'control') {
            return (
             <Layout colorScheme='auto'>
                <StatusBarBackground />
                <ProjectHeader />
                <Card>
                    <div
                        style={{
                            margin: '16px'
                        }}>
                        <Greetings />
                      <p>Looks like there is nothing currently assigned here.</p>
                    </div>
                </Card>
            </Layout>
            )
        }

        if(this.state.cohort === 'writing') {
            return (
              <Layout colorScheme='auto'>
                <StatusBarBackground />
                <ProjectHeader />
                <Card>
                    <div
                        style={{
                            margin: '16px'
                        }}>
                        <Greetings />
                      <p>Select the expresive writing session below to complete.</p>
                    </div>
                </Card>
                <Card>
                    <SingleSurveyTask
                        onClick={() => MyDataHelps.startSurvey('YMAP - Expressive Writing Survey')}
                        task={{
                            status: 'incomplete',
                            surveyDescription: 'Please write about something important to you that was stressful, challenging, or positive.',
                            surveyDisplayName: 'Expressive Writing Survey'
                    }}/>
                    <div style={{
                        margin: '0 0 16px 16px'
                    }}>
                        <SurveyShortStats surveyName={'YMAP - Expressive Writing Survey'}/>
                    </div>
                </Card>
            </Layout>
            )
        }

        /* Make a list with all the interventions. */
        const list = interventions.map((intervention) => (
            <div>
                <CardTitle title={'Week '+intervention.week}/>
                <hr/>
                <WeekCard interventions={intervention.tasks} />
            </div>
        ))

        return (
            <Layout colorScheme='auto'>
                <StatusBarBackground />
                <ProjectHeader />
                <Card>
                    <div
                        style={{
                            margin: '16px'
                        }}>
                        <Greetings />
                        <p>Select any Mindfulness exercise from below. Please complete them now or sometime today.</p>
                    </div>
                </Card>
                <Card>
                  {list}
                </Card>
            </Layout>
        )
    }
}

export default Homework
