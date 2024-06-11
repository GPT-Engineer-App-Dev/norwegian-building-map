import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingCard from "../components/BuildingCard";
import "leaflet/dist/leaflet.css";

const buildings = [
  { id: 1, name: "Building 1", position: [59.91, 10.75], sensorData: { temperature: 22, humidity: 45, co2: 400 } },
  { id: 2, name: "Building 2", position: [59.92, 10.76], sensorData: { temperature: 21, humidity: 50, co2: 420 } },
  { id: 3, name: "Building 3", position: [59.93, 10.77], sensorData: { temperature: 23, humidity: 40, co2: 410 } },
  { id: 4, name: "Building 4", position: [59.94, 10.78], sensorData: { temperature: 20, humidity: 55, co2: 430 } },
  { id: 5, name: "Building 5", position: [59.95, 10.79], sensorData: { temperature: 24, humidity: 35, co2: 390 } },
  { id: 6, name: "Building 6", position: [59.96, 10.80], sensorData: { temperature: 19, humidity: 60, co2: 440 } },
  { id: 7, name: "Building 7", position: [59.97, 10.81], sensorData: { temperature: 25, humidity: 30, co2: 380 } },
  { id: 8, name: "Building 8", position: [59.98, 10.82], sensorData: { temperature: 18, humidity: 65, co2: 450 } },
  { id: 9, name: "Building 9", position: [59.99, 10.83], sensorData: { temperature: 26, humidity: 25, co2: 370 } },
  { id: 10, name: "Building 10", position: [60.00, 10.84], sensorData: { temperature: 17, humidity: 70, co2: 460 } },
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Container maxW="100vw" maxH="100vh" p={0}>
      <MapContainer center={[59.91, 10.75]} zoom={12} style={{ height: "100vh", width: "100vw" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {selectedBuilding && <BuildingCard building={selectedBuilding} />}
    </Container>
  );
};

export default Index;