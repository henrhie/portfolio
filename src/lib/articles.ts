import glob from 'fast-glob'
import { link } from 'fs'
import { siteConfig } from './site-config'

interface Article {
  title: string
  description: string
  author: string
  date: string
  link: string
  linkText?: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export function getAllArticles() {
  return [
    {
      title: 'CogSci 2025 Submission Reviewer',
      date: '2025-03-07',
      description:
        'I reviewed 2 submissions for the 2025 Cognitive Science Society (CogSci) conference.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://cognitivesciencesociety.org/cogsci-2025/',
      linkText: 'More Info',
      type: 'non-article',
    },

    {
      title: 'SAC 2025 Submission Reviewer',
      date: '2024-11-15',
      description:
        'I reviewed 2 submissions for the 2025 ACM Symposium on Applied Computing (SAC) Knowledge and Natural Language Processing track.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://knlp-sac.github.io/2025/',
      linkText: 'More Info',
      type: 'non-article',
    },
    {
      title:
        'Joined the University of New Orleans as a PhD Student in Computer Science.',
      date: '2024-08-13',
      description:
        'I am currently a PhD student at the University of New Orleans working under Dr. Shreya Banerjee.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: siteConfig.social.linkedin,
      linkText: 'Connect with me',
      type: 'non-article',
    },
    {
      title:
        'CoCa: Contrastive Captioners are Image-Text Foundation Models Visually Explained',
      date: '2023-10-04',
      description:
        'Dive deep into the Contrastive Captioner (CoCa) model, an advanced image-text foundation model in machine learning.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://www.datacamp.com/tutorial/coca-contrastive-captioners-are-image-text-foundation-models-visually-explained',
    },
    {
      title:
        'Adversarial Attacks on Neural Networks: Exploring the Fast Gradient Sign Method',
      date: '2021-05-28',
      description:
        'This article captures the details of how to fool a neural network into making wrong predictions using a very fascinating technique - FGSM.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://neptune.ai/blog/adversarial-attacks-on-neural-networks-exploring-the-fast-gradient-sign-method',
    },
    {
      title: 'Unpaired Image to Image Translation with CycleGAN',
      date: '2021-05-06',
      description:
        'This article gives insights into the working mechanism of a Generative Adversarial Network and one of its popular variants, the Cycle Consistent Adversarial Network.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://blog.paperspace.com/unpaired-image-to-image-translation-with-cyclegan/',
    },
    {
      title: 'Image Captioning With AI',
      date: '2021-04-06',
      description:
        "In this tutorial we'll break down how to develop an automated image captioning system step-by-step using TensorFlow and Keras.",
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://blog.paperspace.com/image-captioning-with-ai/',
    },
    {
      title: 'Neural Machine Translation with TensorFlow',
      date: '2021-02-21',
      description:
        'Learn how to build a neural machine translation model using TensorFlow and the Seq2Seq model architecture.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://blog.paperspace.com/neural-machine-translation-with-tensorflow/',
    },
    {
      title: 'PyTorch Loss Functions',
      date: '2020-04-20',
      description:
        'Follow this guide to learn about the various loss functions available to use with PyTorch neural networks, and see how you can directly implement a custom loss function in their stead.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://www.digitalocean.com/community/tutorials/pytorch-loss-functions',
    },
    {
      title: 'How to Build a Variational Autoencoder with TensorFlow',
      date: '2020-04-06',
      description:
        'Learn the key parts of an autoencoder, how a variational autoencoder improves on it, and how to build and train a variational autoencoder using TensorFlow.',
      slug: 'the-power-of-design',
      author: 'Henry Ansah',
      link: 'https://www.allaboutcircuits.com/technical-articles/how-to-build-a-variational-autoencoder-with-tensorflow/',
    },
    {
      title: 'Going beyond torchvision models',
      date: '2020-02-13',
      description:
        'Learn how to get access to models that have not yet been added to the Torchvision framework.',
      slug: 'the-future-of-work',
      author: 'Henry Ansah',
      link: 'https://blog.paperspace.com/going-beyond-torchvision-models/',
    },
    {
      title:
        'Detecting and Localizing Pneumonia from Chest X-Ray Scans with PyTorch',
      date: '2020-01-24',
      description:
        'In this post, we’ll build a machine learning pipeline to classify whether a patient has Pneumonia or not from chest x-ray images and then draw a heat-map on areas that the model used to make these decisions.',
      author: 'Henry Ansah',
      slug: 'the-future-of-work',
      link: 'https://blog.paperspace.com/detecting-and-localizing-pneumonia-from-chest-x-ray-scans-with-pytorch/',
    },
  ]
}
