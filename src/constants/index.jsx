import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence bringing our vision to life are commendable.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above  success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Data Collection and Management",
    description:
      "Gathering raw data from various sources such as databases, surveys, APIs, sensors and Third-Party Platforms.",
  },
  {
    icon: <Fingerprint />,
    text: "Data Cleaning and Preprocessing",
    description:
      "Our AI tools will removing duplicates, handle missing values for consistent and accurate analysis.",
  },
  {
    icon: <ShieldHalf />,
    text: "Exploratory Data Analysis (EDA)",
    description:
      "Automatic exploratory data analysis to identify patterns, trends, and relationships within the data.",
  },
  {
    icon: <BatteryCharging />,
    text: "Data Visualization",
    description:
      "Creating visually appealing and informative data visualizations to help you understand your data better.",
  },
  {
    icon: <PlugZap />,
    text: "Predictive Modeling",
    description:
      "Creating predictive models to make informed decisions based on the data and your business objectives.",
  },
  {
    icon: <GlobeLock />,
    text: "Reporting and Dashboard",
    description:
      "Creating interactive and visually appealing reports and dashboards to help you communicate your findings effectively.",
  },
];

export const checklistItems = [
  {
    title: "Improved Decision Making",
    description:
      "Make informed decisions based on insights from your data.",
  },
  {
    title: "Increased Efficiency",
    description:
      "Streamline processes and optimize resources leading to increased productivity.",
  },
  {
    title: "Enhanced Customer Insights",
    description:
      "Gain a deeper understanding of your customers' needs and preferences.",
  },
  {
    title: "Predictive Capabilities",
    description:
      "Create predictive models to make informed decisions based on the data.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$20",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
      "Unlimited Users",
      "Unlimited Boards",
      "Unlimited Storage",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
      "Unlimited Users",
      "24/7 Support",
      "Unlimited Storage",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const companyLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Partnerships" },
  { href: "#", text: "Careers" },
];

