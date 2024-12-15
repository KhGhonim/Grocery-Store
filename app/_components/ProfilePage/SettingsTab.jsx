
export default function SettingsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Notification Preferences
          </h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded text-green-600"
                defaultChecked
              />
              <span>Order updates</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded text-green-600"
                defaultChecked
              />
              <span>Promotional emails</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded text-green-600" />
              <span>Newsletter</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <button className="text-green-600 hover:text-green-700">
            Change Password
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
