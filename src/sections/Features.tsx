"use client";
import { Feature } from "@/components/Feature";
import {
  MessageSquare,
  Mail,
  Linkedin,
  Phone,
  LucideWorkflow,
  BarChart3,
  LineChartIcon,
  ChartAreaIcon,
} from "lucide-react";

const features = [
  {
    title: "Website Chat & Forms Integration",
    description: `Live chat widget with AI responses  
Conversational embedded forms  
24/7 lead capture and qualification  
💡 Saves 5–8 hrs/week`,
    icon: MessageSquare,
  },
  {
    title: "Email Automation & Campaigns",
    description: `Instant automated email responses  
Follow-up questions based on interest  
Email campaign engagement tracking  
💡 Saves 6–10 hrs/week`,
    icon: Mail,
  },
  {
    title: "Social Media Integration",
    description: `LinkedIn DM qualification  
Facebook & Instagram Messenger support  
Engage prospects directly from content  
💡 Saves 4–6 hrs/week`,
    icon: Linkedin,
  },
  {
    title: "SMS, WhatsApp & Phone Integration",
    description: `AI handles SMS & WhatsApp follow-ups  
Voice AI for inbound & outbound calls  
End-to-end conversation continuity  
💡 Saves 8–12 hrs/week`,
    icon: Phone,
  },
  {
    title: "Automated Lead Routing",
    description: `AI auto-assigns leads to consultants,  
sends Calendly invites, and tracks progress —  
no more missed opportunities.`,
    icon: LucideWorkflow,
  },
  {
    title: "Lead Dashboard",
    description: `Track lead status in real time —  
view new signups, qualification scores,  
follow-ups, and consultant activity at a glance.`,
    icon: BarChart3,
  },
  {
    title: "Predictive Optimization System",
    description: `AI analyzes transcripts, engagement data,  
and outcomes to predict conversion likelihood  
and auto-tune targeting for better performance.`,
    icon: LineChartIcon,
  },
  {
    title: "Analytical Lead Dashboard",
    description: `Visualize real-time performance metrics —  
track leads, conversions, ROI, and hours saved  
with beautiful, interactive dashboards.`,
    icon: ChartAreaIcon,
  },
];

export const Features = () => {
  return (
    <section
      id="automation"
      className="bg-black text-white py-16 sm:py-20 md:py-24 px-4 md:px-8"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-tight">
          Automation Built for Consultants
        </h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-center mt-5 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Connect all your channels into one smart system that qualifies,
            engages, and follows up with leads automatically — so you work less
            and convert more.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <Feature
              key={title}
              title={title}
              description={description}
              icon={<Icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
