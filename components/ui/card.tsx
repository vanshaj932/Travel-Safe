// Card.tsx
export const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
        {children}
      </div>
    );
  };
  
  // CardHeader.tsx
  export const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
        {children}
      </div>
    );
  };
  
  // CardTitle.tsx
  export const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
        {children}
      </h3>
    );
  };
  
  // CardContent.tsx
  export const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`p-6 pt-0 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;