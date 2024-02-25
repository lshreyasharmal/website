import working from "../assets/jpg/working.jpg";
import clsp from "../assets/jpg/clsp.jpg";
import mmt from "../assets/png/mmt2.png";
import dearyou from "../assets/png/dearyou.png"
import iiitd from "../assets/jpeg/iiitd.jpeg"
import nsit from "../assets/png/nsit.png"

export const experienceData = [
    {
        id: 1,
        company: 'dearYou Health',
        jobtitle: 'Lead Software Engineer Intern',
        startYear: 'Jan 2024',
        endYear: 'Present',
        icon: dearyou,
        desc: <p><ul><li>Leading the development of a mobile application that connects students to mental health professionals using Firebase and Expo frameworks.</li></ul></p>,
        link: 'https://www.clsp.jhu.edu/faculty/benjamin-van-durme/'
    },
    {
        id: 2,
        company: 'Center for Language and Speech Processing (CLSP), JHU',
        jobtitle: 'Graduate Research Assistant',
        startYear: 'Sept 2022',
        endYear: 'Present',
        icon: clsp,
        desc: <p><ul><li>Designed and developed a ReactJS application for Amazon Mechanical Turk to collect human annotations, utilizing OpenAI API (GPT-3.5) and LangChain framework for scoring truthfulness, and tuned BERT-based models achieving a 0.73 f1-score.</li> <li>Additionally, fine-tuned T5-base model for open-domain long-form question answering, implementing retrieval indices for robust evaluation.</li><li>Created a benchmark to determine analogical reasoning ability in Language Models.</li></ul></p>,
        link: 'https://www.clsp.jhu.edu/faculty/benjamin-van-durme/'
    },
    {
        id: 3,
        company: 'MakeMyTrip.com (India)',
        jobtitle: 'Senior Software Developer',
        startYear: '2019',
        endYear: '2022',
        icon: mmt,
        desc: <p><ul><li>In the MyBiz team at MMT (Corporate Travel), I served as a Backend Engineer, refining my software development expertise with tools like Spring-Boot, Django, Kafka, Celery, etc. </li><li>I developed microservice-based applications, including Booking Reports Management, Multi-Level Approval Management, and Expense Management systems. </li><li>Proactively turning customer issues into opportunities, I designed and implemented robust features, earning the GoTripper of the Month award for reducing live issues.</li></ul></p>,
        link: 'https://mybiz.makemytrip.com/?gclid=CjwKCAiA7t6sBhAiEiwAsaieYtF8aqytzxzjGF9C-BnyLMzVX5xIyZBCJxOqo-ImOwFtUja2FQSMSRoCnSUQAvD_BwE&cmp=SEM|D|Corporate|G|Brand|MMT_Corporate_Exact|Brand_Exact|636628381904&s_kwcid=AL!1631!3!636628381904!e!!g!!mybiz&ef_id=CjwKCAiA7t6sBhAiEiwAsaieYtF8aqytzxzjGF9C-BnyLMzVX5xIyZBCJxOqo-ImOwFtUja2FQSMSRoCnSUQAvD_BwE:G:s&gad_source=1'
    },
    {
        id: 4,
        company: 'IIIT Delhi (India), Supervisor: Dr. Mukesh Mohania',
        jobtitle: 'Research Assistant - Natural Language Processing',
        startYear: '2021',
        endYear: '2022',
        icon: iiitd,
        desc: <p><ul><li>Trained encoder-based transformer models for custom Named Entity Recognition and analysis of Indian religious texts to compare against spacy and nltk entity classifiers.</li><li>Curated a dataset for custom named entities using the Indian Religious text, Mahabaratha.</li></ul></p>,

    },
    {
        id: 5,
        company: 'IIIT Delhi (India), Supervisor: Dr. Debarka Sengupta',
        jobtitle: 'Research Assistant - Machine Learning',
        startYear: '2018',
        endYear: '2019',
        icon: iiitd,
        desc: <p><ul><li>Built machine learning models for computational genomics to identify Circulating Tumor Cells in blood streams using R, python, and H2O.ai library.</li></ul></p>,

    },
    {
        id: 6,
        company: 'NSUT (India), Supervisor: Dr. Prerna Gaur',
        jobtitle: 'Machine Learning Intern',
        startYear: 'May 2017',
        endYear: 'July 2017',
        icon: nsit,
        desc: <p><ul><li>Built machine learning models to classify faults in air conditioning systems using MATLAB Toolbox.</li></ul></p>
    },
]

export const experienceImage = {
    "image": working
}