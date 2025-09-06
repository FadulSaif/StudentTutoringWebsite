export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#064232] mb-6">About X-Tutor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting Malaysian students with qualified tutors for personalized, affordable, and accessible education.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-[#FFF5F2] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#064232] mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At X-Tutor, we believe every student deserves access to quality education. We're bridging the gap between
            talented tutors and eager learners across Malaysia, making personalized learning affordable and accessible
            for everyone.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#568F87] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-[#064232] mb-3">Personalized Learning</h3>
            <p className="text-gray-600">One-on-one sessions tailored to each student's learning style and pace.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#F5BABB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-[#064232] mb-3">Affordable Rates</h3>
            <p className="text-gray-600">
              Quality education starting from RM25/hour, making learning accessible to all.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#568F87] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-[#064232] mb-3">Qualified Tutors</h3>
            <p className="text-gray-600">Experienced educators from top Malaysian universities and institutions.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#064232] text-white rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Qualified Tutors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Subjects Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#064232] mb-6">Get Started Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of Malaysian students who are already improving their grades with X-Tutor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-[#568F87] hover:bg-[#064232] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Learning
            </a>
            <a
              href="/subjects"
              className="border-2 border-[#568F87] text-[#568F87] hover:bg-[#568F87] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Subjects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
