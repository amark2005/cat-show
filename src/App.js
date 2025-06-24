import React, { useState } from 'react';
import './App.css';

function App() {
  const [catImage, setCatImage] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  const catBreeds = [
    { value: '', label: 'Any Breed' },
    { value: 'abys', label: 'Abyssinian' },
    { value: 'aege', label: 'Aegean' },
    { value: 'amer', label: 'American Bobtail' },
    { value: 'amau', label: 'American Curl' },
    { value: 'asho', label: 'American Shorthair' },
    { value: 'amis', label: 'American Wirehair' },
    { value: 'bali', label: 'Balinese' },
    { value: 'beng', label: 'Bengal' },
    { value: 'birm', label: 'Birman' },
    { value: 'bomb', label: 'Bombay' },
    { value: 'bsph', label: 'British Shorthair' },
    { value: 'buri', label: 'Burmese' },
    { value: 'char', label: 'Chartreux' },
    { value: 'chau', label: 'Chausie' },
    { value: 'chee', label: 'Cheetoh' },
    { value: 'coas', label: 'Colorpoint Shorthair' },
    { value: 'crex', label: 'Cornish Rex' },
    { value: 'cymr', label: 'Cymric' },
    { value: 'cypr', label: 'Cyprus' },
    { value: 'dons', label: 'Donskoy' },
    { value: 'drex', label: 'Devon Rex' },
    { value: 'egyp', label: 'Egyptian Mau' },
    { value: 'ebur', label: 'European Burmese' },
    { value: 'esho', label: 'Exotic Shorthair' },
    { value: 'hbro', label: 'Havana Brown' },
    { value: 'hima', label: 'Himalayan' },
    { value: 'japa', label: 'Japanese Bobtail' },
    { value: 'java', label: 'Javanese' },
    { value: 'kora', label: 'Korat' },
    { value: 'kuri', label: 'Kurilian' },
    { value: 'lape', label: 'LaPerm' },
    { value: 'lihu', label: 'Lykoi' },
    { value: 'lyko', label: 'Lykoi' },
    { value: 'mala', label: 'Malayan' },
    { value: 'manc', label: 'Mancoon' },
    { value: 'mand', label: 'Mandarin' },
    { value: 'maup', label: 'Manx' },
    { value: 'mcoo', label: 'Maine Coon' },
    { value: 'mink', label: 'Minskin' },
    { value: 'nbal', label: 'Nebelung' },
    { value: 'norw', label: 'Norwegian Forest Kitty' },
    { value: 'ocic', label: 'Ocicat' },
    { value: 'orie', label: 'Oriental' },
    { value: 'pers', label: 'Persian' },
    { value: 'pixb', label: 'Pixie-bob' },
    { value: 'raga', label: 'Ragdoll' },
    { value: 'ragm', label: 'Ragdoll' },
    { value: 'rblu', label: 'Russian Blue' },
    { value: 'sava', label: 'Savannah' },
    { value: 'sfol', label: 'Scottish Fold' },
    { value: 'siam', label: 'Siamese' },
    { value: 'sibe', label: 'Siberian' },
    { value: 'sing', label: 'Singapura' },
    { value: 'snow', label: 'Snowshoe' },
    { value: 'soma', label: 'Somali' },
    { value: 'sphy', label: 'Sphynx' },
    { value: 'tonk', label: 'Tonkinese' },
    { value: 'toyg', label: 'Toyger' },
    { value: 'tvan', label: 'Turkish Van' },
    { value: 'ycho', label: 'York Chocolate' }
  ];

  const fetchCatImage = async () => {
    try {
      let url = 'https://api.thecatapi.com/v1/images/search';
      if (selectedBreed) {
        url += `?breed_ids=${selectedBreed}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Cute Kitty Pictures</h1>
      </header>
      <main>
        <div className="container">
          <label htmlFor="breed-select">Choose a breed:</label>
          <select 
            id="breed-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {catBreeds.map((breed) => (
              <option key={breed.value} value={breed.value}>
                {breed.label}
              </option>
            ))}
          </select>
          <br /><br />
          <button id="cat-button" onClick={fetchCatImage}>
            Click Here!!
          </button>
          <br />
          <img 
            id="cat-image" 
            src={catImage} 
            alt="Cat"
            style={{ display: catImage ? 'block' : 'none' }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;