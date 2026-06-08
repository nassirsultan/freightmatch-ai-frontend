import { useState } from "react";

function ShipmentForm({ onMatch }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pickup_location: "",
    drop_location: "",
    truck_type: "",
    budget: "",
    booking_type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((val) => val == null || val === "")) {
      alert("Please fill in all fields before searching.");
      return;
    }
    const payload = { ...formData, budget: parseFloat(formData.budget) };
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/carriers/matchCarriers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) {
        alert("Something went wrong. Please try again.");
        return;
      }
      const data = await response.json();
      onMatch(data);
    } catch (error) {
      alert("Network error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col gap-5">
      <h2 className="text-orange-500 font-bold text-xl uppercase tracking-wider border-b border-gray-700 pb-3">
        Shipment Details
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Pickup Location */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm uppercase tracking-wider">
            Pickup Location
          </label>
          <select
            className="bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-orange-500"
            value={formData.pickup_location}
            onChange={(e) =>
              setFormData({ ...formData, pickup_location: e.target.value })
            }
          >
            <option value="">Select city</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Surat">Surat</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm uppercase tracking-wider">
            Drop Location
          </label>
          <select
            className="bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-orange-500"
            value={formData.drop_location}
            onChange={(e) =>
              setFormData({ ...formData, drop_location: e.target.value })
            }
          >
            <option value="">Select city</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Surat">Surat</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </div>

        {/* Truck Type */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm uppercase tracking-wider">
            Truck Type
          </label>
          <select
            className="bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-orange-500"
            value={formData.truck_type}
            onChange={(e) =>
              setFormData({ ...formData, truck_type: e.target.value })
            }
          >
            <option value="">Select type</option>
            <option value="flatbed">Flatbed</option>
            <option value="refrigerated">Refrigerated</option>
            <option value="tanker">Tanker</option>
          </select>
        </div>

        {/* Booking Type */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm uppercase tracking-wider">
            Booking Type
          </label>
          <select
            className="bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-orange-500"
            value={formData.booking_type}
            onChange={(e) =>
              setFormData({ ...formData, booking_type: e.target.value })
            }
          >
            <option value="">Select type</option>
            <option value="standard">Standard</option>
            <option value="direct">Direct</option>
          </select>
        </div>

        {/*Budget side by side */}

        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm uppercase tracking-wider">
            Budget (₹)
          </label>
          <input
            type="number"
            className="bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-orange-500"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded uppercase tracking-widest transition-colors duration-200"
        >
          {loading ? "Matching Carriers..." : "Find Carriers"}
        </button>
      </form>
    </div>
  );
}
export default ShipmentForm;
