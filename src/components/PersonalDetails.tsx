
export const PersonalDetails = () => {
  const details = [
    { label: "Address", value: "Hyderabad, India" },
    { label: "Languages Known", value: "English, Hindi, Telugu" },
    { label: "Date of Birth", value: "25th March 2000" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Personal Details
          </h2>
          <p className="text-xl text-gray-400">Additional information</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-500">
            <div className="space-y-8">
              {details.map((detail, index) => (
                <div key={index} className="group flex flex-col sm:flex-row sm:justify-between gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <span className="font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">{detail.label}:</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
