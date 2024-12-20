import { FaStar } from 'react-icons/fa'

export default function DeliveryFeedbackSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
    <h2 className="text-xl font-semibold mb-4">Delivery Feedback</h2>
    <div className="space-y-6">
      <div>
        <p className="text-gray-600 mb-2">Rate your delivery experience</p>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} className="text-gray-300 hover:text-yellow-400">
              <FaStar className="w-8 h-8" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-600 mb-2">Additional Comments</label>
        <textarea
          className="w-full border rounded-lg p-3 h-24 focus:ring-2 focus:ring-green-500"
          placeholder="Share your feedback about the delivery..."
        ></textarea>
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
        Submit Feedback
      </button>
    </div>
  </div>

  )
}
