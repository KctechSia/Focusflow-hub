"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("subscribers").insert([{ email }]);

    if (error) {
      toast.error(error.message || "Something went wrong.");
      console.log(error.message);
    } else {
      toast.success("Successfully subscribed!");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-[#5d2ca8] text-white border-t border-amber-500/20 mt-16">
  <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold text-amber-400 mb-2">
        Stay in the Loop
      </h3>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        Join our newsletter for automation insights, product updates, and exclusive growth tips.
      </p>
      <form onSubmit={handleSubmit} className="flex bg-white/10 rounded-lg overflow-hidden border border-white/20">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-transparent px-3 py-2 text-sm placeholder-white/50 text-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-500 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition disabled:opacity-50"
        >
          {loading ? "..." : "Join"}
        </button>
      </form>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-sm font-semibold text-amber-400 mb-3">Contact Us</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>focusflowhubinquiry@gmail.com</li>
        <li>+234 9073858632</li>
        <li>Lagos, Nigeria</li>
      </ul>
    </div>

    {/* About */}
    <div>
      <h4 className="text-sm font-semibold text-amber-400 mb-3">About Us</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <p>At FocusFlow Hub, we’re redefining how consultants work. Our automation platform turns hours of manual client handling into seamless, intelligent workflows, helping consultants grow faster and work smarter.</p>
        
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 mt-8">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm text-gray-400">
      <p>© 2025 FocusFlow Hub. All rights reserved.</p>
      <p className="text-amber-400">Empowering Consultants with AI</p>
    </div>
  </div>
</footer>
  );
}