import React, { useEffect, useState } from "react";
import axios from "axios";

interface Beer {
  id: number;
  name: string;
  image_url: string;
}

export default function Beer() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [selectedBeerId, setSelectedBeerId] = useState<number | null>(null);

  useEffect(() => {
    axios.get<Beer[]>("https://api.punkapi.com/v2/beers").then((res) => {
      const beersData = res.data;
      setBeers(beersData);
    });
  }, []);

  const handleBeerClick = (id: number) => {
    setSelectedBeerId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <h1>Beer from PunkAPI</h1>
      <ul>
        {beers.map((beer) => (
          <button
            className="beer__button"
            key={beer.id}
            onClick={() => handleBeerClick(beer.id)}
          >
            {beer.name}
            {selectedBeerId === beer.id && (
              <img className="beer__img" src={beer.image_url} alt={beer.name} />
            )}
          </button>
        ))}
      </ul>
    </div>
  );
}
