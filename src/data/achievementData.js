import ieee from "../assets/png/ieee.png";
import jcm from "../assets/jpg/jcm.jpg";
import acm from "../assets/png/acm.png";
export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Comparative Analysis of Entity Identification and Classification of Indian Epics',
            details : <p><u>S. Sharma</u> and M. Mohania</p>,
            date : 'November 7, 2022',
            field : <p>ICMI</p>,
            image : acm,
            link : 'https://dl.acm.org/doi/10.1145/3536221.3556573'
        },
        {
            id : 2,
            title : 'Integrative Analysis and Machine Learning based Characterization of Single Circulating Tumor Cells',
            details : <p>Iyer A, Gupta K, <u>Sharma S</u>, et al.</p>,
            date : 'April 22, 2020',
            field : ' J Clin Med',
            image : jcm,
            link : 'https://www.mdpi.com/2077-0383/9/4/1206'
        },
        {
            id : 3,
            title : 'Predictive Maintenance of Air Conditioning Systems Using Supervised Machine Learning',
            details : <p>Shrishti T, Sahil B, Archit T, Prerna G, and <u>Shreya S</u></p>,
            date : 'December 1, 2019',
            field : "ISAP",
            image : ieee,
            link : 'https://ieeexplore.ieee.org/document/9065995/'
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/