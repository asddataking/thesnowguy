export default function BookingForm() {
    return (
      <form className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Service</label>
          <select className="w-full px-4 py-2 rounded-md bg-gray-800 text-white">
            <option value="salting">Salting</option>
            <option value="sidewalk-clearing">Sidewalk Clearing</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input type="date" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold"
        >
          Book Now
        </button>
      </form>
    );
  }
  