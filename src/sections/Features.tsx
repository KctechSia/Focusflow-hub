"use client";
import { Feature } from "@/components/Feature";
import { MessageSquare, Mail, Linkedin, Phone, LucideWorkflow, BarChart3, LineChartIcon, ChartAreaIcon } from "lucide-react";

const features = [
  {
    title: "Website Chat & Forms Integration",
    description: `Live chat widget with AI responses
Conversational embedded forms
24/7 lead capture and qualification
Save: 5-8 hours/week`,
    icon: MessageSquare,
  },
  {
    title: "Email Automation & Campaigns",
    description: `Instant automated email responses
Follow-up questions based on interest
Email campaign lead engagement
Save: 6-10 hours/week`,
    icon: Mail,
  },
  {
    title: "Social Media Integration",
    description: `LinkedIn DM qualification
Facebook/Instagram Messenger support
Engage prospects from social content
Save: 4-6 hours/week`,
    icon: Linkedin,
  },
  {
    title: "SMS, WhatsApp & Phone Integration",
    description: `SMS and WhatsApp conversations
Voice AI for inbound calls
Outbound follow-up automation
Save: 8-12 hours/week`,
    icon: Phone,
  },
  {
  title: "Automated Lead Routing",
  description: `AI automatically assigns leads to available consultants, sends Calendly invites, and tracks every response. No more missed opportunities.`,
  icon: LucideWorkflow,
},
  {
  title: "Lead Dashboard",
  description:
    `Track every lead’s status in one place.
     View new signups, qualification scores, follow-up progress, and consultant assignments in real time.`,
  icon: BarChart3,
},
  {
  icon: LineChartIcon,
  title: "Predictive Optimization System",
  description:
    `AI-driven optimization that analyzes call transcripts,
     engagement data, and campaign outcomes to predict which leads are most likely to convert 
    and automatically fine-tunes your targeting, messaging, and qualification rules for continuous performance improvement.`,
},
{
    icon: ChartAreaIcon,
    title: "Analytical Lead Dashboard",
    description:
      `Visualize your performance in real time 
      Track total leads, conversion rates, and channel performance.
       Measure ROI and hours saved with clarity.`,
  },

];

export const Features = () => {
  return (
    <section
    id="automation"
    className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
          Automation Built for Consultants
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Connect all your channels into one smart system that qualifies,
            engages, and follows up with leads automatically.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <Feature key={title} title={title} description={description} icon={<Icon className="w-6 h-6" />} />
          ))}
        </div>
      </div>
    </section>
  );
};
