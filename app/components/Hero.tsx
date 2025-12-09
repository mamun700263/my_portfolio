export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold text-blue-600">Md Abdullah All Mamun</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">Backend Engineer | Competitive Programmer</p> 
      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          View Work
        </a>

        <a
          href="mailto:mamun700263@gmail.com"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium 
                     text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
