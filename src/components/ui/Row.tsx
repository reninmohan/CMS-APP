interface RowProps{
    children?: React.ReactNode
}

function Row({ children }: RowProps) {
    return <div className="border-b-2 px-2 py-2 font-semibold capitalize tracking-wide text-gray-500">{children}</div>;
  }
  
  export default Row;
  