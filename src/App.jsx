import junaid from "./assets/junaid.jpg";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Shaik Junaid</h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#certifications" className="hover:text-blue-600">Certifications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-widest">
              Professional Nursing Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Shaik <span className="text-blue-600">Junaid</span>
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              B.Sc Nursing Registered Nurse
            </h2>

            <p className="text-lg leading-8 text-gray-600 mb-8">
              Passionate B.Sc Nursing student dedicated to providing compassionate
              patient care and promoting health and well-being.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#contact"
                className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-700"
              >
                Contact Me
              </a>

              <a
                href="mailto:shaikjunaid5510@gmail.com"
                className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-50"
              >
                Email
              </a>

            </div>
          </div>

          <div className="flex justify-center">

  <img
    src={junaid}
    alt="Shaik Junaid"
    className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
  />

</div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              About Me
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              I am a dedicated and compassionate nursing student focused on
              delivering quality patient care and supporting healthcare teams
              efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-semibold mb-3">
                Patient Care
              </h3>

              <p className="text-gray-600">
                Focused on providing compassionate healthcare support.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">🚑</div>

              <h3 className="text-2xl font-semibold mb-3">
                Emergency Support
              </h3>

              <p className="text-gray-600">
                Trained in emergency first aid and CPR procedures.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">💙</div>

              <h3 className="text-2xl font-semibold mb-3">
                Professional Growth
              </h3>

              <p className="text-gray-600">
                Continuously improving clinical and communication skills.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-blue-50">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700">
              Education
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Sanjay Gandhi College of Nursing, Bangalore
            </h3>

            <p className="text-xl text-gray-700 mb-2">
              B.Sc Nursing Registered Nurse
            </p>

            <p className="text-gray-600 text-lg">
              Currently pursuing 3rd Year Nursing Education.
            </p>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700">
              Clinical Skills
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              'Patient Care',
              'Communication',
              'Emergency Support',
              'First Aid',
              'ICU Assistance',
              'OT Assistance',
              'Anesthesia Assistance'
            ].map((skill, index) => (

              <div
                key={index}
                className="bg-blue-50 p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="text-4xl mb-4">✔️</div>

                <h3 className="text-xl font-semibold text-gray-700">
                  {skill}
                </h3>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-blue-50">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700">
              Clinical Experience
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              OPD Workshop
            </h3>

            <p className="text-blue-600 font-semibold mb-3">
              Megura Multi Specialist Hospital
            </p>

            <p className="text-gray-600 leading-8 text-lg">
              Participated in OPD workshop activities and gained exposure to
              healthcare procedures and patient handling.
            </p>

          </div>

        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              'Emergency First Aid',
              'CPR Certification',
              'Disaster Management',
              'Stroke Management'
            ].map((certificate, index) => (

              <div
                key={index}
                className="bg-blue-50 rounded-3xl p-8 shadow-sm"
              >

                <div className="flex items-center gap-5">

                  <div className="text-4xl">📜</div>

                  <h3 className="text-2xl font-semibold text-gray-800">
                    {certificate}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Languages */}
      <section className="py-20 px-6 bg-blue-50">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-12">
            Languages Known
          </h2>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              'Arabic',
              'English',
              'Kannada',
              'Hindi',
              'Urdu',
              'Marathi'
            ].map((language, index) => (

              <div
                key={index}
                className="px-8 py-4 bg-white rounded-full shadow-md"
              >
                {language}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-blue-700 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-4">📧</div>

              <h3 className="text-2xl font-semibold mb-3">
                Email
              </h3>

              <p className="text-lg break-all">
                shaikjunaid5510@gmail.com
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8">

              <div className="text-5xl mb-4">📱</div>

              <h3 className="text-2xl font-semibold mb-3">
                Phone
              </h3>

              <p className="text-lg">
                8951516688
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>
          © 2026 Shaik Junaid | Professional Nursing Portfolio
        </p>
      </footer>

    </div>
  );
}