import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchHero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Encuentra tu hogar ideal en El Salvador
        </h1>
        <p className="text-xl mb-8">
          Miles de propiedades te esperan
        </p>
        <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Buscar por ubicación, tipo de propiedad..."
            className="bg-white text-gray-900"
          />
          <Button className="bg-accent hover:bg-accent/90">
            <Search className="h-5 w-5 mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};