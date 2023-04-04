import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));

  return (
    <div className='component' >ProductList</div>
  )
}
