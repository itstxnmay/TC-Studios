import React from 'react';
import { 
  Terminal, 
  Mic, 
  Zap, 
  Cpu, 
  CircleCheck, 
  Monitor, 
  Clock 
} from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "For SaaS & Tech Founders",
    category: "Commercial",
    client: "SaaS · Tech",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    description: "Consistent, High Quality motion graphics and color grading for brand-led ad creatives, built to maintain premium visual identity.",
    includes: [
      "Product Demos & Walkthroughs",
      "LinkedIn Authority Content",
      "Conversion-Focused Ad Creatives (Apple style)"
    ],
    tags: ["Ads", "Authority", "Identity"]
  },
  {
    id: 2,
    title: "For Creators & Youtubers",
    category: "Short-Form",
    client: "Creators · Organic",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    description: "Algorithm-friendly editing designed to maximize Average View Duration (AVD). We engineer the edit to keep them watching.",
    includes: [
      "Short Form Content (Specially Talking Head)",
      "Advanced Motion Graphics & Kinetic Typography",
      "Retention Hacking, Viral Hooks & Sound Design"
    ],
    tags: ["Hooks", "Pacing", "Scalable"]
  },
  {
    id: 3,
    title: "For Podcasters",
    category: "Podcast Repurposing",
    client: "Repurposing · Distribution",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
    description: "Turn one podcast episode into a consistent stream of short form content - ready for shorts, reels and tiktok.",
    includes: [
      "Viral Trendy Captions & Visual Hooks",
      "Platform-Native Optimization (9:16)",
      "10x Viral Shorts per Episode"
    ],
    tags: ["Clips", "Clarity", "Distribution"]
  },
  {
    id: 4,
    title: "For Faceless Channels",
    category: "Faceless",
    client: "Narrative · Systemized",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    description: "End to End production for Short Form Content channels. You provide the topic; we build the asset.",
    includes: [
      "Script-to-Video Pipelines [Short Form Only]",
      "Stock Sourcing & Motion Graphics",
      "Copyright-Safe Asset Sourcing"
    ],
    tags: ["Narrative", "Stock", "Motion"]
  }
];

export const THUMBNAILS = [
  { id: 5, title: "MrBeast Style Challenge", category: "Entertainment", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "AI Revolution Explained", category: "Education", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
  { id: 7, title: "Fitness Transformation", category: "Health", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
  { id: 8, title: "Passive Income Guide", category: "Business", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=600&auto=format&fit=crop" },
  { id: 9, title: "Travel: Hidden Gems", category: "Travel", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop" },
  { id: 10, title: "Podcast Highlight", category: "Podcast", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop" },
  { id: 11, title: "Coding Tutorial 101", category: "Dev", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop" }
];

export const SERVICES = [
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "For SaaS Founders",
    valueProp: "We turn your code into authority.",
    deliverables: [
      "High-Retention Product Demos",
      "Kinetic Typography Explainers",
      "LinkedIn Authority Clips",
      "Feature Walkthroughs"
    ]
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "For Podcasters",
    valueProp: "The Content Repurposing Engine.",
    deliverables: [
      "Viral Short-Form Clips",
      "Vertical Formatting & Captions",
      "Audio Cleanup & Restoration",
      "Multi-Platform Distribution Assets"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "For Creators",
    valueProp: "Retention engineering for max AVD.",
    deliverables: [
      "MrBeast-Style Retention Editing",
      "Custom Sound Design & SFX",
      "Motion Graphics Templates",
      "Hook Optimization"
    ]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "For Cash-Cow Channels",
    valueProp: "End-to-end production at scale.",
    deliverables: [
      "Script-to-Video Pipelines",
      "Premium Stock Footage Sourcing",
      "Kinetic Typography Systems",
      "High-Volume Series Production"
    ]
  }
];

export const STATS = [
  { label: "On-Time Delivery", value: 100, suffix: "%", icon: <CircleCheck className="text-purple-500" /> },
  { label: "UHD Quality Standard", value: 4, suffix: "K", icon: <Monitor className="text-purple-500" /> },
  { label: "Response Time", value: 24, suffix: "h", icon: <Clock className="text-purple-500" /> },
];