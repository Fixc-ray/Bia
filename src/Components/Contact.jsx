import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message submitted (connect backend next)");
  };

  return (
    <section className="min-h-screen bg-[#222120] text-[#cfcdcb] px-6 md:px-16 py-28">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-xs tracking-[0.3em] text-[#989691] mb-4">
          CONTACT
        </p>

        <h1 className="text-4xl md:text-5xl font-light text-[#f3f3f2] mb-6">
          Let’s Build Something Bankable
        </h1>

        <p className="text-[#bcbbb8] leading-relaxed">
          Whether you're a government, developer, or investor, BIA helps structure
          projects and unlock capital. Reach out to start the conversation.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-[#363432] border border-[#4a4845] rounded-2xl p-10 shadow-lg">

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-[#989691]">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-[#222120] border border-[#4a4845] rounded-lg px-4 py-3 text-[#f3f3f2] focus:outline-none focus:border-[#5e5c58]"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-[#989691]">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#222120] border border-[#4a4845] rounded-lg px-4 py-3 text-[#f3f3f2] focus:outline-none focus:border-[#5e5c58]"
            />
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm mb-2 text-[#989691]">
              Project Details
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="bg-[#222120] border border-[#4a4845] rounded-lg px-4 py-3 text-[#f3f3f2] focus:outline-none focus:border-[#5e5c58]"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-between items-center mt-4">

            <p className="text-xs text-[#989691]">
              We typically respond within 24–48 hours.
            </p>

            <button
              type="submit"
              className="bg-[#f3f3f2] text-[#222120] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#cfcdcb] transition"
            >
              Submit Inquiry →
            </button>
          </div>

        </form>
      </div>

      {/* FOOTER CONTACT STRIP */}
      <div className="max-w-4xl mx-auto mt-16 flex flex-col md:flex-row justify-between gap-6 text-sm text-[#aaa8a5]">

        <div>
          <p className="text-[#989691] text-xs mb-1">EMAIL</p>
          <p>info@bia-advisory.com</p>
        </div>

        <div>
          <p className="text-[#989691] text-xs mb-1">PHONE</p>
          <p>+254 700 000000</p>
        </div>

        <div>
          <p className="text-[#989691] text-xs mb-1">LOCATION</p>
          <p>Nairobi, Kenya</p>
        </div>

      </div>

    </section>
  );
}