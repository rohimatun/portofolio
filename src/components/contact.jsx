function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
        />

        <textarea
          rows="6"
          placeholder="Message"
          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
        />

        <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
