import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
}

export const PropertyCard = ({
  image,
  price,
  title,
  location,
  beds,
  baths,
  sqft,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5 text-accent" />
        </button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold">${price.toLocaleString()}</h3>
        </div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{location}</p>
      </CardContent>
      <CardFooter className="px-4 py-3 border-t flex justify-between text-sm text-gray-600">
        <span>{beds} hab</span>
        <span>{baths} baños</span>
        <span>{sqft} m²</span>
      </CardFooter>
    </Card>
  );
};