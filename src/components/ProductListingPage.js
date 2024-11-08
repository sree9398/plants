import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlantCard({ plant }) {
    return (
        <div className="plant-card">
            {plant.default_image && plant.default_image.thumbnail ? (
                <img src={plant.default_image.thumbnail} alt={plant.common_name} className="plant-image" />
            ) : (
                <p>No image available</p>
            )}
            <div className="plant-details">
                <h2>{plant.common_name}</h2>
                <p><strong>Scientific Name:</strong> {plant.scientific_name.join(", ")}</p>
                <p><strong>Other Names:</strong> {plant.other_name ? plant.other_name.join(", ") : "N/A"}</p>
                <p><strong>Cycle:</strong> {plant.cycle}</p>
                <p><strong>Watering Needs:</strong> {plant.watering}</p>
                <p><strong>Sunlight:</strong> {plant.sunlight.join(", ")}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}



function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=sk-KQTZ672d8968938a47565`);
                setData(response.data.data); // Adjusted to access `data` array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);

    return (
        <div>
            <h1>Plant List</h1>
            <div className="plant-cards-container">
                {data.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
        </div>
    );
}

export default App;
