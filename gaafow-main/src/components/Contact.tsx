import React, { useState, useEffect } from "react";
import { Mail, MapPin, Send, CheckCircle2, History, Trash2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SavedMessage } from "../types";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load saved message interactions from localStorage
  useEffect(() => {
    const loaded = localStorage.getItem("portfolio_messages");
    if (loaded) {
      try {
        setSavedMessages(JSON.parse(loaded));
      } catch (err) {
        console.error("Error parsing stored messages");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("submitting");

    // Simulate backend network tick
    setTimeout(() => {
      const newMessage: SavedMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleString()
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));

      // Reset form controls
      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
      
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const updated = savedMessages.filter(msg => msg.id !== id);
    setSavedMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-primary-container text-on-primary border-t border-outline-variant/10 scroll-mt-20">
      <div className="px-6 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Descriptive info & context */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-secondary-container mb-6 leading-tight"
            id="contact-title"
          >
            Let's build something extraordinary.
          </motion.h2>
          
          <p className="font-sans text-lg mb-10 text-on-primary/80 max-w-md leading-relaxed" id="contact-desc">
            Currently available for select freelance opportunities and full-time senior engineering roles. Reach out and let's discuss your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group" id="contact-info-email">
              <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-on-primary/20">
                <Mail className="w-5 h-5 text-secondary-container" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wider text-on-primary/60 font-bold uppercase">EMAIL ME</p>
                <a href="mailto:hello@omar-gaafow.com" className="font-sans font-semibold text-base hover:text-secondary-container transition-colors">
                  hello@omar-gaafow.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group" id="contact-info-location">
              <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-on-primary/20">
                <MapPin className="w-5 h-5 text-secondary-container" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wider text-on-primary/60 font-bold uppercase">LOCATION</p>
                <p className="font-sans font-semibold text-base">Remote / London, UK</p>
              </div>
            </div>
          </div>

          {/* Stored submissions toggler pill */}
          {savedMessages.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setShowInbox(!showInbox)}
              className="mt-12 flex items-center gap-2 bg-on-primary/10 hover:bg-on-primary/15 text-xs font-mono font-semibold py-2 px-4 rounded-full transition-all border border-on-primary/5 cursor-pointer text-secondary-container"
              id="view-submissions-toggle"
            >
              <History className="w-3.5 h-3.5" />
              <span>{showInbox ? "Hide" : "Review"} Submitted Messages ({savedMessages.length})</span>
            </motion.button>
          )}
        </div>

        {/* Right Column: Form card details */}
        <div className="bg-surface p-8 md:p-12 rounded-[2rem] shadow-2xl border border-outline-variant/30 text-on-surface">
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="name">
                  FULL NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/40 outline-none transition-all text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/40 outline-none transition-all text-sm font-sans"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="message">
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/40 outline-none transition-all text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`w-full font-sans font-bold text-[15px] py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                status === "success"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-secondary-container text-primary-container hover:bg-secondary-container/90 active:scale-[0.99]"
              }`}
              id="contact-submit-btn"
            >
              {status === "idle" && (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300" />
                </>
              )}
              {status === "submitting" && (
                <>
                  <div className="w-5 h-5 border-2 border-primary-container border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message Sent Successfully!</span>
                </>
              )}
              {status === "error" && (
                <span>Please complete all inputs correctly.</span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Slide-out overlay drawer for local inbox, clean and functional */}
      <AnimatePresence>
        {showInbox && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-surface text-on-surface border-t border-outline-variant/30 mt-16 overflow-hidden"
            id="local-inbox-drawer"
          >
            <div className="max-w-[1250px] mx-auto p-8">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20 mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-primary-container">
                    In-Browser Submissions (LocalStorage Console)
                  </h3>
                </div>
                <button
                  onClick={() => setShowInbox(false)}
                  className="text-on-surface-variant hover:text-primary text-xs font-mono font-semibold py-1 px-3 rounded-md bg-surface-container-low border border-outline-variant/30 cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layoutId={msg.id}
                    className="bg-surface-container-low border border-outline-variant/20 p-5 rounded-2xl relative shadow-sm hover:border-primary/20 transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-sans font-bold text-sm text-primary-container">
                          {msg.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant/80 font-mono">
                          {msg.email}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-on-surface-variant hover:text-red-500 p-1.5 rounded-lg bg-surface hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-on-surface-variant font-sans bg-white p-3 rounded-xl border border-outline-variant/10 leading-relaxed italic mb-3">
                      "{msg.message}"
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-outline font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{msg.timestamp}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
