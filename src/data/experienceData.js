import working from "../assets/jpg/working.jpg";
import clsp from "../assets/jpg/clsp.jpg";
import mmt from "../assets/png/mmt.png";
import iiitd from "../assets/jpeg/iiitd.jpeg";

export const experienceData = [
    {
        id: 1,
        company: 'Center for Language and Speech Processing (CLSP), Johns Hopkins University',
        jobtitle: 'Graduate Research Assistant',
        startYear: 'Sept 2022',
        endYear: 'Present',
        icon: clsp,
        desc: 'Designed and developed a ReactJS application for Amazon Mechanical Turk to collect human annotations, utilizing OpenAI API (GPT-3.5) and LangChain framework for scoring truthfulness, and tuned BERT-based models achieving a 0.73 f1-score. Additionally, fine-tuned T5-base model for open-domain long-form question answering, implementing retrieval indices for robust evaluation.'
    },
    {
        id: 2,
        company: 'MakeMyTrip.com (India)',
        jobtitle: 'Senior Software Developer',
        startYear: '2019',
        endYear: '2022',
        icon: mmt,
        desc: 'In the MyBiz team at MMT (Corporate Travel), I served as a Backend Engineer, refining my software development expertise with tools like Spring-Boot, Django, Kafka, Celery, etc. I developed microservice-based applications, including Booking Reports Management, Multi-Level Approval Management, and Expense Management systems. Proactively turning customer issues into opportunities, I designed and implemented robust features, earning the GoTripper of the Month award for reducing live issues.'
    },
    // {
    //     id: 3,
    //     company: 'IIIT Delhi (India)',
    //     jobtitle: 'Research Engineer',
    //     startYear: '2021',
    //     endYear: '2022',
    //     icon: iiitd,
    //     desc: '- j'
    // },
]

export const experienceImage = {
    "image": working
}