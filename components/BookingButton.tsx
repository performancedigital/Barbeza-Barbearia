
import React from 'react';

const BookingButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
           <span className="text-barbeza-olive font-semibold">Agendar agora</span>
        </div>
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.504.895 3.236 1.368 5.004 1.369 5.306 0 9.626-4.32 9.628-9.627.001-2.572-1.002-4.99-2.825-6.814-1.822-1.823-4.237-2.826-6.81-2.827-5.307 0-9.628 4.321-9.63 9.628 0 2.121.554 4.189 1.602 5.978l.291.492-1.055 3.854 3.95-1.036zm11.032-6.763c-.301-.15-1.779-.879-2.053-.979-.275-.099-.475-.15-.675.15-.2.299-.775.979-.95 1.178-.175.199-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.074-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.583-.493-.504-.675-.513-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.899 1.225 3.099.15.2 2.115 3.227 5.125 4.531.716.311 1.275.496 1.71.636.72.228 1.375.196 1.892.119.576-.085 1.779-.726 2.029-1.427.25-.7.25-1.299.175-1.425-.075-.125-.275-.199-.575-.349z"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default BookingButton;
