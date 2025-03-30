
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-light">
      <div className="text-center max-w-md mx-auto px-4 animate-fade-up">
        <h1 className="text-6xl md:text-8xl font-serif mb-6 text-gold">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Page Not Found</h2>
        <p className="text-charcoal-light mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-charcoal-dark hover:bg-charcoal inline-flex items-center">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
