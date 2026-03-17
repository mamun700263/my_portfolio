export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-6 text-gray-300">
          <p>
            I’m currently open to remote or freelance opportunities. 
            You can reach me via email or check out my GitHub.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:mamun700263@gmail.com" className="text-purple-400 underline">
              mamun700263@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/mamun700263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              github.com/mamun700263
            </a>
          </p>

          <p>
            <strong>Location:</strong> Wrexham, UK
          </p>
        </div>

        {/* Right Form */}
        <form
          className="flex flex-col gap-4"
          action="https://formspree.io/f/yourFormID"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400 resize-none h-32"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}