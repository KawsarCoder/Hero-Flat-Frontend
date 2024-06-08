import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function contact() {
  return (
    <>
      {" "}
      {/* top section  */}
      <section>
        <div className="contact-bg-image bg-cover bg-no-repeat bg-center">
          <div className="bg-black opacity-70 h-60 flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>
      {/* Contact us  */}
      <section className="max-w-[1170px] mx-auto my-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Contact With Us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-24 gap-4 text-purple-600">
          {/* card one  */}
          <div className="text-center bg-purple-300 p-4 rounded-lg grid justify-items-center md:mx-2 lg:mx-0">
            <LocationOnIcon className="text-white shadow-lg rounded-full bg-purple-600 p-1" />
            <h5 className="text-lg font-semibold ">Location</h5>
            <p className="text-justify mt-1 font-semibold">Fulgazi, Feni</p>
          </div>
          {/* card two  */}
          <div className="text-center bg-purple-300 p-4 rounded-lg grid justify-items-center">
            <CallIcon className="text-white shadow-lg rounded-full bg-purple-600 p-1" />
            <h5 className="text-lg font-semibold ">Contact</h5>
            <p className="text-justify mt-1 font-semibold">+8801580-380982</p>
          </div>
          {/* card three  */}
          <div className="text-center bg-purple-300 p-4 rounded-lg grid justify-items-center">
            <MailOutlineIcon className="text-white shadow-lg rounded-full bg-purple-600 p-1" />
            <h5 className="text-lg font-semibold ">Mail</h5>
            <p className="text-justify mt-1 font-semibold">
              md.kawsar.developer@gmail.com
            </p>
          </div>
        </div>
      </section>
      {/* contact form  */}
      <section className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-12 my-24 justify-center items-center">
          <div className="contactFormImage w-full h-full bg-center bg-cover col-start-1 col-end-13 lg:col-end-7 grid justify-items-center"></div>
          <div className="col-start-1 lg:col-start-7 col-end-13 px-8">
            <h3 className="text-3xl font-bold ">
              {" "}
              Have questions or need assistance?
            </h3>
            <span className="font-semibold block">
              Our friendly support team is here to help. Reach out to us
              anytime!
            </span>

            <form className="space-y-6 mt-4" action="#" method="POST">
              <div>
                <label
                  htmlFor="text"
                  className="block text-lg font-semibold leading-10 text-gray-900"
                >
                  Name:
                </label>
                <div className="mt-1">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold leading-10 text-gray-900"
                >
                  Email address:
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold leading-10 text-gray-900"
                >
                  Your Message:
                </label>
                <div className="mt-1">
                  <textarea
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </form>

            <button className="font-bold text-white mt-4 px-4 py-2 rounded-lg bg-purple-400 hover:bg-purple-600 delay-200">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
