interface ColProps {
    children?: React.ReactNode;
  }

function Col({ children } : ColProps) {
    return <div className="grid grid-cols-[10rem_16rem_8rem_25rem]">{children}</div>;
  }
  
  export default Col;
  