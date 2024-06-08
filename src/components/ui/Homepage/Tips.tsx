const Tips = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Helpful Tips
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900">Tip 1</h3>
              <p className="mt-4 text-gray-600">
                Always write clean and readable code. It helps in maintaining
                the project in the long run.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900">Tip 2</h3>
              <p className="mt-4 text-gray-600">
                Regularly commit your code changes and push to a remote
                repository. This ensures your work is backed up.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900">Tip 3</h3>
              <p className="mt-4 text-gray-600">
                Make use of version control branching. It helps in managing
                different features and bug fixes independently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
