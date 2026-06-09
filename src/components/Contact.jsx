import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    // Web3Forms public access key (Get one free at web3forms.com)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        e.target.reset();
      } else {
        setResult(data.message);
      }
    }catch(error) {
        console.error(error)
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full p-16 bg-gray-950 scroll-m-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400">Let's collaborate on your next big project</p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Info Details Panel (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-gray-800 rounded-lg text-indigo-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Me</p>
                    <a href="mailto:alokkuri98@gmail.com" className="text-sm hover:text-indigo-400 transition">alokkuri98@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-gray-800 rounded-lg text-indigo-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Me</p>
                    <a href="tel:+8801607136110" className="text-sm hover:text-indigo-400 transition">+880 17952-45365</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-gray-800 rounded-lg text-indigo-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel (3 Columns) */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">
            
            {/* Optional Honeypot Antispam Field (Hidden from human view) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
              <input 
                type="text" 
                name="subject" 
                required 
                placeholder="Project Collaboration" 
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea 
                name="message" 
                required 
                rows="5" 
                placeholder="Tell me about your project..." 
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              {/* Status Message Display */}
              <p className={`text-sm ${result.includes("successfully") ? "text-emerald-400" : "text-amber-400"}`}>
                {result}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shadow-lg shadow-indigo-600/10"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};
