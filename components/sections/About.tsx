export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            I’m a Computer Science student at{" "}
            <strong className="text-white">Wrexham University</strong> and a
            backend-focused developer working mainly with Python, Django,
            FastAPI, PostgreSQL, Redis, and Docker.
          </p>

          <p>
            I like building systems that are{" "}
            <strong className="text-white">
              reliable, maintainable, and scalable
            </strong>
            . I’ve worked on production projects including a school
            management platform used by{" "}
            <strong className="text-white">500+ users</strong> and an uptime
            monitoring platform with background workers, Redis,
            authentication, APIs, and PostgreSQL.
          </p>

          <p>
            Alongside development, I’m quite interested in{" "}
            <strong className="text-white">
              algorithms and problem solving
            </strong>
            . I’ve solved 1100+ DSA problems across{" "}
            <a
              href="https://www.geeksforgeeks.org/user/mamun700263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GeeksForGeeks
            </a>
            ,{" "}
            <a
              href="https://leetcode.com/u/mamun700263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LeetCode
            </a>
            ,{" "}
            <a
              href="https://codeforces.com/profile/mamun700263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Codeforces
            </a>
            , and{" "}
            <a
              href="https://www.codechef.com/users/mamun700263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              CodeChef
            </a>
            . I also represented{" "}
            <strong className="text-white">
              CCN University of Science and Technology
            </strong>{" "}
            at the{" "}
            <strong className="text-white">2024 ICPC Dhaka Regional</strong>.
          </p>

          <p>
            I’ve also had the chance to work with and lead other developers,
            including mentoring people who were completely new to coding.
            I’ve led the backend side of projects, reviewed code through Git
            and GitHub, and helped newer developers get comfortable with
            backend development, testing, and system design.
          </p>

          <p>
            Right now, I’m spending a lot of time on{" "}
            <strong className="text-white">
              algorithms, systems, and backend engineering
            </strong>
            , while looking for opportunities where I can work on real
            production problems and keep improving as an engineer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Primary Focus</p>
            <p className="text-white font-medium">
              Backend Engineering
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Core Stack</p>
            <p className="text-white font-medium">
              Python · Django · FastAPI
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Problem Solving</p>
            <p className="text-white font-medium">
              1100+ DSA Problems
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Education</p>
            <p className="text-white font-medium">
              BSc Computer Science
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">ICPC</p>
            <p className="text-white font-medium">
              Dhaka Regional 2024
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Current Direction</p>
            <p className="text-white font-medium">
              Backend · Systems · Infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}