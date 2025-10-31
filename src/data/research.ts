import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export interface Research {
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  tags: string[];
  award?: string;
  readme?: string;
  role: string;
  client: string;
  duration: string;
  details: {
    title: string;
    content: string;
  }[];
  links: {
    label: string;
    url: string;
    icon: React.ElementType;
  }[];
  authors?: string;
  venue?: string;
  link?: string;
}

export const research: Research[] = [
  {
    title: "Efficient Multimodal Large Language Model",
    period: "2024 Fall ~ Present",
    description:
      "Researching efficient Multimodal Large Language Models (MLLMs) for Visual Question Answering on images and videos. Focusing on integrating motion vectors and token pruning methods to enhance model efficiency and balance model performance.",
    thumbnail: "https://images.unsplash.com/photo-1581092916376-2960bff38f39?w=800&auto=format&fit=crop&q=80",
    tags: ["Python", "Pytorch", "Hugging Face", "LLaVA", "Video LLM"],
    role: "AI Researcher",
    client: "Academic Research",
    duration: "1 year",
    details: [
      {
        title: "Challenge",
        content: "The high computational cost of traditional Multimodal Large Language Models makes them unsuitable for real-time applications on devices with limited resources. There is a need to balance model performance with efficiency."
      },
      {
        title: "Solution",
        content: "I first researched online to find the possible solutions, then implemented the one that integrates motion vectors into the model. This approach allows the model to reduce the sampling rate of the video while preserving great understanding of dynamic scenes in videos, which can greatly enhance its efficiency while maintaining performance."
      },
      {
        title: "Impact",
        content: "The implemented methods showed a significant reduction in computational overhead (about 90% reduction) while maintaining competitive performance on several VQA benchmarks. "
      },
      {
        title: "Lessons Learned",
        content: "From this project, I learned how to perform research systematically. I started from understanding the problem, surveying existing literature, implementing and experimenting with different approaches, and finally analyzing the results. This experience has enhanced my research skills and deepened my understanding of Multimodal Large Language Models."
      }
    ],
    links: [],
  },
  {
    title:
      "AEGIS : Automated Co-Evolutionary Framework for Guarding Prompt Injections Schema",
    venue: "Under Review",
    authors: "Ting-Chun Liu, Ching-Yu Hsu, Kuan-Yi Lee, Chi-An Fu, Hung-yi Lee",
    link: "https://arxiv.org/abs/2509.00088",
    description:
      "Devised a GAN-like framework to automatically generate prompts to defend against malicious prompt injection attacks. Tested the framework on real-world articles across various LLMs, achieving a 20% in True Positive Rate (TPR) with only 2% decrease in True Negative Rate (TNR).",
    period: "2023 Fall",
    thumbnail: "https://images.unsplash.com/photo-1581092916376-2960bff38f39?w=800&auto=format&fit=crop&q=80",
    tags: ["GAN", "LLM", "Prompt Injection"],
    role: "AI Researcher",
    client: "Academic Research",
    duration: "6 months",
    details: [],
    links: [],
  },
];