import { Box, Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dummyData = {
  temperature: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 20),
  humidity: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 40),
  co2: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 400),
};

const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

const BuildingDetails = () => {
  const { id } = useParams();

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: dummyData.temperature,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humidity (%)',
        data: dummyData.humidity,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'CO2 Levels (ppm)',
        data: dummyData.co2,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Building {id} Details</Heading>
      <VStack spacing={4}>
        <Box w="100%" h="400px">
          <Line data={data} />
        </Box>
      </VStack>
    </Box>
  );
};

export default BuildingDetails;