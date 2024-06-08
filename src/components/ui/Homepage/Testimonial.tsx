const Testimonial = () => {
  return (
    <section className="bg-purple-200 py-12 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What Our Clients Say
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium text-gray-900">
                This company is the best. I am so happy with the result!
              </p>
              <p className="mt-4 text-gray-600">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium text-gray-900">
                Amazing service and support. Highly recommend!
              </p>
              <p className="mt-4 text-gray-600">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium text-gray-900">
                A wonderful experience from start to finish.
              </p>
              <p className="mt-4 text-gray-600">- Bob Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
