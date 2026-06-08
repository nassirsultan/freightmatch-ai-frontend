function CarrierResults({ carriers }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col gap-4 overflow-y-auto">
      <h2 className="text-orange-500 font-bold text-xl uppercase tracking-wider border-b border-gray-700 pb-3">
        Matched Carriers
      </h2>

      {carriers.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-600">
          <span className="text-5xl mb-4">🚛</span>
          <p className="uppercase tracking-widest text-sm">
            No carriers matched yet
          </p>
        </div>
      ) : (
        carriers.map((carrier, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-600 rounded-lg p-4 flex flex-col gap-2 hover:border-orange-500 transition-colors duration-200"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">{carrier.name}</h3>
              <span className="text-orange-500 font-bold text-lg">
                ₹{carrier.charge.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{carrier.email}</p>
            <div className="flex flex-wrap gap-4 mt-1">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Coverage
                </p>
                <p className="text-gray-300 text-sm">
                  {carrier.area_coverage.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Truck Types
                </p>
                <p className="text-gray-300 text-sm">
                  {carrier.truck_types.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Fleet Size
                </p>
                <p className="text-gray-300 text-sm">
                  {carrier.number_of_trucks} trucks
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CarrierResults;
