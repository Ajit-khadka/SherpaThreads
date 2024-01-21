import PropTypes from "prop-types";
import { MdErrorOutline } from "react-icons/md";

const Popup = (props) => {
  return (
    <section>
      <main
        className=" h-[100vh] w-[100vw] antialiased text-gray-900 font-sans overflow-x-hidden absolute"
        onClick={props.close}
      >
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div className="md:flex items-center">
              <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i className="bx bx-error text-3xl">
                  <MdErrorOutline className=""/>
                </i>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Confirm deletion</p>
                <p className="text-sm text-gray-700 mt-1">
                  Please confirm your deletion, the deleted data cannot be
                  reverted
                </p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                onClick={props.delete}
              >
                Confirm
              </button>
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
                onClick={props.close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

Popup.propTypes = {
  close: PropTypes.func,
  delete: PropTypes.func,
};

export default Popup;
