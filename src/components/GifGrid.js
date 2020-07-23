import React from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  /*   const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); */

  //Desestructurar objeto
  //data:xxxx es para dar una alias a la variable principal
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/* forma de hacer un if sin else */}
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
