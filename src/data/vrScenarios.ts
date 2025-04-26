import { VRScenario } from '../types';

export const vrScenarios: VRScenario[] = [
  // Anxiety scenarios
  {
    id: 'anxiety_level1',
    disorderId: 'anxiety',
    level: 1,
    title: 'Calm Garden',
    description: 'A peaceful garden environment to practice deep breathing and relaxation techniques.',
    imageUrl: 'https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 10,
    completed: false,
  },
  {
    id: 'anxiety_level2',
    disorderId: 'anxiety',
    level: 2,
    title: 'Mindful Market',
    description: 'A gentle introduction to a public space with guided mindfulness exercises.',
    imageUrl: 'https://images.pexels.com/photos/375892/pexels-photo-375892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 15,
    completed: false,
  },
  {
    id: 'anxiety_level3',
    disorderId: 'anxiety',
    level: 3,
    title: 'Public Speaking Simulator',
    description: 'Practice giving presentations to a virtual audience with controllable difficulty.',
    imageUrl: 'https://images.pexels.com/photos/2602545/pexels-photo-2602545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 20,
    completed: false,
  },
  
  // Depression scenarios
  {
    id: 'depression_level1',
    disorderId: 'depression',
    level: 1,
    title: 'Sunrise Meditation',
    description: 'Experience a beautiful sunrise with guided positive affirmations.',
    imageUrl: 'https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 10,
    completed: false,
  },
  {
    id: 'depression_level2',
    disorderId: 'depression',
    level: 2,
    title: 'Achievement Path',
    description: 'Complete small, rewarding tasks in a beautiful environment to build a sense of accomplishment.',
    imageUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 15,
    completed: false,
  },
  {
    id: 'depression_level3',
    disorderId: 'depression',
    level: 3,
    title: 'Social Connection',
    description: 'Practice positive social interactions with virtual characters in supportive scenarios.',
    imageUrl: 'https://images.pexels.com/photos/7710098/pexels-photo-7710098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: 20,
    completed: false,
  },
];