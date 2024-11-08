import React from 'react';

const PlantCard = ({ plant, onAddToCart }) => {
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setAdded(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button disabled={added} onClick={handleAddToCart}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
