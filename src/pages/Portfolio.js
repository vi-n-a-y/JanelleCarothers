import { Link } from 'react-router-dom';

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

const Portfolio = () => {
  return (
    <section>
      <div className="custom-map-out-flex">
        {images.map((image) => {
          return (
            <div className="custom-portfolio-image-indi" key={image.id}>
              <div className="custom-portfolio-img-width">
                <Link to={`/image/${image.id}`}>
                  <img
                    src={image.src}
                    alt={image.name}
                    loading="lazy"
                  />
                </Link>
                <p>{image.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
