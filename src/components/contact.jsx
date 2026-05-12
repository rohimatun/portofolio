import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>

      <p className="text-gray-400 mb-12">
        Let's connect and build something amazing together.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Instagram */}
        <a
          href="https://instagram.com/nurinndh__"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            flex
            flex-col
            items-center
            gap-4
            hover:bg-cyan-500/10
            hover:border-cyan-400/40
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition
            duration-300
          "
        >
          <FaInstagram className="text-3xl text-cyan-400 group-hover:scale-110 transition" />
          <span>Instagram</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/rohimatun-nurin"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            flex
            flex-col
            items-center
            gap-4
            hover:bg-cyan-500/10
            hover:border-cyan-400/40
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition
            duration-300
          "
        >
          <FaLinkedin className="text-3xl text-cyan-400 group-hover:scale-110 transition" />
          <span>LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6285878843423"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            flex
            flex-col
            items-center
            gap-4
            hover:bg-cyan-500/10
            hover:border-cyan-400/40
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition
            duration-300
          "
        >
          <FaWhatsapp className="text-3xl text-cyan-400 group-hover:scale-110 transition" />
          <span>WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:rohimatunnurin@gmail.com"
          className="
            group
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            flex
            flex-col
            items-center
            gap-4
            hover:bg-cyan-500/10
            hover:border-cyan-400/40
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition
            duration-300
          "
        >
          <FaEnvelope className="text-3xl text-cyan-400 group-hover:scale-110 transition" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
