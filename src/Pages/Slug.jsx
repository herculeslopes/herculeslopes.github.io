import { useParams } from "react-router-dom"
import SISMOB from "../Projects/SISMOB/index";
import Default from "../Components/Default";
import CGeo from "../Components/CGeo";

const Slug = () => {
  const { slug } = useParams();
  switch (slug) {
    case 'sismob':
      return <SISMOB />
  
    case 'cgeo':
      return <CGeo />
      
    default:
      return <Default />;
  }
}

export default Slug;