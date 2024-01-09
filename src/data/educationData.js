import studying from '../assets/jpg/studying.jpg';
import iiitd from '../assets/jpeg/iiitd.jpeg';
import jhu from '../assets/png/jhu.png';

export const educationData = [
    {
        id: 1,
        institution: 'Johns Hopkins University (USA)',
        course: 'Masters in Computer Science',
        startYear: '2022, August',
        endYear: '2024, May',
        icon: jhu,
        courses: ['Machine Translation', 'Artifical Agents', 'Reinforcement Learning', 'Sketching & Indexing','Machine Learning-Deep Learning', 'Aritifical Intelligence Software System Design', 'Parallel Computing for Data Science', 'Cloud Computing', 'Software System Design'],
        activities: ['Course Assistant', 'Research Assistant', <span>Treasurer at <a href='https://gracejhu.github.io/' target='_blank'>GRACE</a> 2023-24</span>]
    },
    {
        id: 2,
        institution: 'Indraprastha Institute of Technology, Delhi (India)',
        course: 'Bachelor of Technology in Computer Science',
        startYear: '2015',
        endYear: '2019',
        icon: iiitd,
        courses: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems', 'Advanced Algorithms', 'Computer Networks', 'Natural Language Processing', 'Image Processing', 'Big Data Analysis', 'Designing Human-Centered Systems', 'Privacy and Security on Online Social Media', 'Statistical Machine Learning', 'Linear Optimization', 'Linear Algebra', 'Numerical Methods', 'Calculus I & III', 'Probability & Statistics'],
        activities: ['Teaching Assistant', 'Research Assistant', 'Vice Captain, BasketBall Team', 'Soccer Team']

    }
]

export const eduImage = {
    'image': studying
}