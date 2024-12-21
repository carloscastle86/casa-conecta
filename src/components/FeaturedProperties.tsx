import { PropertyCard } from "./PropertyCard";

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    price: 250000,
    title: "Casa Moderna en Santa Tecla",
    location: "Santa Tecla, La Libertad",
    beds: 3,
    baths: 2,
    sqft: 180,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 180000,
    title: "Apartamento en San Salvador",
    location: "Colonia Escalón, San Salvador",
    beds: 2,
    baths: 2,
    sqft: 120,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: 320000,
    title: "Villa con Vista al Mar",
    location: "La Libertad",
    beds: 4,
    baths: 3,
    sqft: 250,
  },
];

export const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Propiedades Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};