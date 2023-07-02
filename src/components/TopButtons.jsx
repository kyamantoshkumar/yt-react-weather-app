import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "India",
    },
    {
      id: 2,
      title: "Indonesia",
    },
    {
      id: 3,
      title: "Malaysia",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="bg-primary flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
          >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
