import React from 'react';
import { 
  Smartphone, 
  Mic, 
  Zap, 
  DollarSign, 
  CheckCircle, 
  Monitor, 
  Clock 
} from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "For Brands & Founders",
    category: "Commercial",
    client: "Ads · Authority · Identity",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    description: "Strategic video editing for brand-led content and ad creatives—focused on clarity, consistency, and premium visual identity.",
    tags: ["Ads", "Authority", "Identity"]
  },
  {
    id: 2,
    title: "For Creators",
    category: "Short-Form",
    client: "Small → Large · Organic",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    description: "Retention-focused short-form editing built around hooks, pacing, and repeatable formats—scalable from early-stage creators to established channels.",
    tags: ["Hooks", "Pacing", "Scalable"]
  },
  {
    id: 3,
    title: "For Podcasts",
    category: "Podcast Repurposing",
    client: "Repurposing · Distribution",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
    description: "Long-form podcast recordings repurposed into structured short-form clips, edited for clarity, pacing, and platform-native distribution.",
    tags: ["Clips", "Clarity", "Distribution"]
  },
  {
    id: 4,
    title: "For Faceless Channels",
    category: "Faceless",
    client: "Narrative · Systemized",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    description: "End-to-end production for faceless short-form channels—covering structure, pacing, stock selection, motion, and final delivery.",
    tags: ["Narrative", "Stock", "Motion"]
  }
];

export const SERVICES = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Viral Short-Form",
    description: "Short-form edits built around retention—clear hooks, controlled pacing, and CTAs designed to drive action."
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Podcast Repurposing",
    description: "Turn a single episode into a consistent stream of short-form content - ready for Shorts, Reels, and TikTok."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Visual Identity — For Brands",
    description: "Consistent, high-quality motion graphics and color grading for brand-led ad creatives, built to maintain a premium and cohesive visual identity."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Full Production — Faceless Short-Form",
    description: "End-to-end production for faceless short-form reels, from pacing and motion to editing, and final delivery."
  }
];

export const STATS = [
  { label: "On-Time Delivery", value: 100, suffix: "%", icon: <CheckCircle className="text-purple-500" /> },
  { label: "UHD Quality Standard", value: 4, suffix: "K", icon: <Monitor className="text-purple-500" /> },
  { label: "Response Time", value: 24, suffix: "h", icon: <Clock className="text-purple-500" /> },
];