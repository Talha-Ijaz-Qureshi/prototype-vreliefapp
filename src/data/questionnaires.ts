import { Questionnaire } from '../types';

export const questionnaires: Questionnaire[] = [
  {
    disorderId: 'anxiety',
    title: 'Generalized Anxiety Assessment',
    description: 'This questionnaire helps determine the severity of your anxiety symptoms.',
    questions: [
      {
        id: 'anxiety_q1',
        text: 'How often do you feel nervous, anxious, or on edge?',
        options: [
          { id: 'a1', text: 'Not at all', value: 0 },
          { id: 'a2', text: 'Several days', value: 1 },
          { id: 'a3', text: 'More than half the days', value: 2 },
          { id: 'a4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'anxiety_q2',
        text: 'How often do you find it difficult to stop or control worrying?',
        options: [
          { id: 'a1', text: 'Not at all', value: 0 },
          { id: 'a2', text: 'Several days', value: 1 },
          { id: 'a3', text: 'More than half the days', value: 2 },
          { id: 'a4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'anxiety_q3',
        text: 'How often do you have trouble relaxing?',
        options: [
          { id: 'a1', text: 'Not at all', value: 0 },
          { id: 'a2', text: 'Several days', value: 1 },
          { id: 'a3', text: 'More than half the days', value: 2 },
          { id: 'a4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'anxiety_q4',
        text: 'How often do you become easily annoyed or irritable?',
        options: [
          { id: 'a1', text: 'Not at all', value: 0 },
          { id: 'a2', text: 'Several days', value: 1 },
          { id: 'a3', text: 'More than half the days', value: 2 },
          { id: 'a4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'anxiety_q5',
        text: 'How often do you feel afraid as if something awful might happen?',
        options: [
          { id: 'a1', text: 'Not at all', value: 0 },
          { id: 'a2', text: 'Several days', value: 1 },
          { id: 'a3', text: 'More than half the days', value: 2 },
          { id: 'a4', text: 'Nearly every day', value: 3 },
        ],
      },
    ],
  },
  {
    disorderId: 'depression',
    title: 'Depression Severity Assessment',
    description: 'This questionnaire helps determine the severity of your depression symptoms.',
    questions: [
      {
        id: 'depression_q1',
        text: 'How often do you have little interest or pleasure in doing things?',
        options: [
          { id: 'd1', text: 'Not at all', value: 0 },
          { id: 'd2', text: 'Several days', value: 1 },
          { id: 'd3', text: 'More than half the days', value: 2 },
          { id: 'd4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'depression_q2',
        text: 'How often do you feel down, depressed, or hopeless?',
        options: [
          { id: 'd1', text: 'Not at all', value: 0 },
          { id: 'd2', text: 'Several days', value: 1 },
          { id: 'd3', text: 'More than half the days', value: 2 },
          { id: 'd4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'depression_q3',
        text: 'How often do you have trouble falling or staying asleep, or sleeping too much?',
        options: [
          { id: 'd1', text: 'Not at all', value: 0 },
          { id: 'd2', text: 'Several days', value: 1 },
          { id: 'd3', text: 'More than half the days', value: 2 },
          { id: 'd4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'depression_q4',
        text: 'How often do you feel tired or have little energy?',
        options: [
          { id: 'd1', text: 'Not at all', value: 0 },
          { id: 'd2', text: 'Several days', value: 1 },
          { id: 'd3', text: 'More than half the days', value: 2 },
          { id: 'd4', text: 'Nearly every day', value: 3 },
        ],
      },
      {
        id: 'depression_q5',
        text: 'How often do you have thoughts that you would be better off dead, or of hurting yourself?',
        options: [
          { id: 'd1', text: 'Not at all', value: 0 },
          { id: 'd2', text: 'Several days', value: 1 },
          { id: 'd3', text: 'More than half the days', value: 2 },
          { id: 'd4', text: 'Nearly every day', value: 3 },
        ],
      },
    ],
  },
];