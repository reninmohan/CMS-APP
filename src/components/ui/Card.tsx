
interface CardProps{
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
    return <div className="mt-4 rounded-md border-t-4 border-t-blue-900 bg-white p-6 pb-8">{children}</div>;
  }
  
  export default Card;
  