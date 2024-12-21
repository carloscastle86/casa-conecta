import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-primary text-xl font-bold">InmobiliariaES</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/propiedades" className="text-gray-700 hover:text-primary">
              Propiedades
            </Link>
            <Link to="/vender" className="text-gray-700 hover:text-primary">
              Vender
            </Link>
            <Button variant="ghost">
              <UserCircle className="h-5 w-5 mr-2" />
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};