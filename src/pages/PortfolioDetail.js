import { useParams } from "react-router-dom";
import Portfolio from "./Portfolio";

const images = [
    { id: 1, name: 'img-1', src: "images/_1.jpg" },
    { id: 2, name: 'img-2', src: 'images/_2.jpg' },
    { id: 3, name: 'img-3', src: 'images/_3.jpg' },
    { id: 4, name: 'img-4', src: 'images/_4.jpg' },
    { id: 5, name: 'img-5', src: 'images/_5.jpg' },
    { id: 6, name: 'img-6', src: 'images/_6.jpg' },
    { id: 7, name: 'img-7', src: 'images/_7.jpg' },
    { id: 8, name: 'img-8', src: 'images/_8.jpg' }
  ];

const PortfolioDetail=()=>{
const {id}=useParams();
const image=images.find((img)=>img.id===parseInt(id));

if(!image){
    return <div>Image not found</div>
}



    return(
        <div>
            <h1>{image.name}</h1>
            <img src={image.src} alt={image.name} loading="lazy" tyle={{ width: '100%', maxWidth: '500px' }}/>
        
        <Portfolio/>
        </div>
    );
}

export default PortfolioDetail;