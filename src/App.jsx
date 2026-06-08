import { useState } from "react";
import ShipmentForm from "./components/ShipmentForm";
import CarrierResults from "./components/CarrierResults";

function App() {
  const [matchedCarriers, setMatchedCarriers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono">
      {/* Header */}
      <header className="border-b border-orange-500 px-8 py-5">
        <h1 className="text-3xl font-bold text-orange-500 tracking-widest uppercase">
          🚛 FreightMatch AI
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          AI-powered carrier matching for your shipments
        </p>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-2 gap-8 p-8 h-[calc(100vh-80px)]">
        <ShipmentForm onMatch={setMatchedCarriers} />
        <CarrierResults carriers={matchedCarriers} />
      </main>
    </div>
  );
}

export default App;
