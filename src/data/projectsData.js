import comprehendit from '../assets/png/penguins_3.png'
import langprep from '../assets/png/langprep.png'
import smear from '../assets/png/smear.png'
import mono from '../assets/png/mono.png'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Comprehend.it',
        projectDesc: "An education platform to transcribe videos or extract text from documents to generate quizzes, notes, and summaries from them using LLMs.",
        tags: ['Django', 'PyTorch', 'LangChain', 'Whisper', 'Llama-2', 'GPT-3.5'],
        code: 'https://github.com/ML-AI-ProjectComprehend',
        demo: 'https://drive.google.com/file/d/1wd8gZFlSjlFEgDaE6o0jfAE3jgGFzFQT/view',
        image: comprehendit
    },
    {
        id: 2,
        projectName: 'LangPrep',
        projectDesc: 'An application to learn word pronunciation in diverse languages.',
        tags: ['Django', 'AWS', 'S3', 'Textract', 'Polly'],
        code: 'https://github.com/lshreyasharmal/langprep',
        demo: 'https://www.youtube.com/watch?v=A9SPl5sjR88',
        image: langprep
    },
    {
        id: 3,
        projectName: 'SMeaR',
        projectDesc: 'A GAN network to create a language agnostic embedding generator.',
        tags: ['PyTorch', 'python', 'HuggingFace', 'GAN', 'BERT'],
        code: 'https://github.com/lshreyasharmal',
        demo: 'https://drive.google.com/file/d/1irzd7WUnMsKWctVo7bcwsvhLxLiSPtgX/view',
        image: smear
    },
    {
        id: 4,
        projectName: 'Unsupervised Monocular Depth Estimation from Video',
        projectDesc: 'Enhanced depth estimation for monocular videos using self-attention and vision transformer, outperforming the baseline on KITT dataset. Implemented self-attention layers and ViT as image encoder with adversarial loss.',
        tags: ['Flutter', 'Firebase'],
        code: 'https://github.com/lshreyasharmal',
        demo: 'https://drive.google.com/file/d/1Qg701VqlOVaMD0G9fIRvZBZqdx_B-3rC/view?usp=sharing',
        image: mono
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/