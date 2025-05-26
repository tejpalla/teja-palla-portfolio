
export const PersonalDetails = () => {
  const details = [
    { label: "Address", value: "Hyderabad, India" },
    { label: "Languages Known", value: "English, Hindi, Telugu" },
    { label: "Date of Birth", value: "25th March 2000" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Details</h2>
          <p className="text-lg text-gray-600">Additional information</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="space-y-6">
              {details.map((detail, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-semibold text-gray-900 mb-1 sm:mb-0">{detail.label}:</span>
                  <span className="text-gray-700">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
