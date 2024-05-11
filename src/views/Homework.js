import React from 'react'
import { Card, CardTitle, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'
import Greetings from '../components/Greetings'
import WeekCard from '../components/WeekCard'

const interventions = [
    {week:1, tasks:[
        {title:'Inviting Relaxation', description:'Bring kind awareness to those parts of the body that hold stress.', survey:'YMAP - Relaxation'},
        {title:'Body Scan', description:'Become aware of your entire body--approach the experience with a sense of curiosity and openness', survey:'YMAP - Body Scan'},
        {title:'Mindful Walk', description: 'Become attentive to your thoughts, feelings, and physical sensations while also engaging with your surroundings ', survey:'YMAP -Mindful Walk'},
    ]},
    {week:2, tasks:[
        {title:'Gratitude', description:'Boost resilient and positive feelings by focusing on gratitude', survey:'YMAP - Gratitude'},
        {title:'Growing Stronger through Gratitude', description:'Explore reasons to feel grateful', survey:'YMAP - Growing Stronger through Gratitude'},
        {title:'Gratitude in Difficult Times', description:'Hold on to gratitude, even in difficult situations', survey:'YMAP - Gratitude in Difficult Times'},
        {title:'Mini-Gratitude', description:'Boost positive feelings through gratitude', survey:'YMAP - Mini-Gratitude'}
    ]},
    {week:3, tasks:[
        {title:'Compassionate Body Scan', description:'Check in to see what’s going on in your body with the “three C’s”: curiosity, care, and compassion', survey:'YMAP - Compassionate Body Scan'},
        {title:'Relax, Ground, and Clear', description:'Use your imagination to relax and feel more stable and grounded', survey:''},
        {title:'Being Kind to Your Body', description:'Connect to your entire body with warmth and kindness', survey:''},
        {title:'Body Scan 2', description:'Become aware of your entire body--approach the experience with a sense of curiosity and openness', survey:''},
        {title:'Inviting Relaxation 2', description:'Bring kind awareness to those parts of the body that hold stress', survey:''}
    ]},
    {week:4, tasks:[
        {title:'Anchoring the Breath', description:'Anchor awareness on the feeling of the breath', survey:''},
        {title:'Mindful Breathing', description:'Approach your experience with openness and curiosity', survey:''},
        {title:'Following the Breath', description:'Strengthen focus by keeping attention on the breath', survey:''},
        {title:'Listen and Chill', description:'Transform listening into stress-relieving calm', survey:''},
    ]},
    {week:5, tasks:[
        {title:'Three Minutes to Noting', description:'Note thoughts as they arise', survey:''},
        {title:'Noting', description:'Practice staying present when the mind jumps from thought to thought', survey:''},
        {title:'Drop the Storyline', description:'Experience emotions without a storyline attached', survey:''},
        {title:'Mind like the Sky', description:'Watch thoughts and feelings as if they are clouds', survey:''},
        {title:'Mind like the Ocean', description:'Watch thoughts like they are waves in the ocean', survey:''},
    ]},
    {week:6, tasks:[
        {title:'Surf the Waves of Emotions', description:'Learn to ride your emotions back to solid ground', survey:''},
        {title:'R.A.I.N.', description:'When you’re struggling with challenging feelings, or notice that you’re being hard on yourself, try R.A.I.N.—Recognizing, Allowing, Investigating, Not identifying', survey:''},
        {title:'Words in Body', description:'Better understand what you’re feeling, and where you feel it in your body', survey:''},
        {title:'Be Your Inner Ally', description:'Tame your inner critic and treat yourself like you would a good friend', survey:''},
        {title:'Self-Compassion Break', description:'Step back, refuel, and find a deeper sense of strength and stability', survey:''},
    ]},
    {week:7, tasks:[
        {title:'Just Like Me', description:'Foster understanding and connection by exploring what we all might have in common', survey:''},
        {title:'Just Like Me Too', description:'Relate positively and find common ground with anyone', survey:''},
        {title:'Commonality of Suffering', description:'Find more patience, empathy, and understanding as you learn to recognize how we’re all in the same boat', survey:''},
    ]}
]

class Homework extends React.Component {

    constructor(props : any) {
        super(props)

        // Create the set of strings that will change based on the dates.
        this.state = {}
    }

    render() {
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
                        <p>Select any of the mindfulness sessions below to complete them.</p>
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
