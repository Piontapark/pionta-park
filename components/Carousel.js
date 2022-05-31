import './carousel.css'

export const Carousel = ({ images }) => {
  return (
    <div
      className="carousel flow-horizontal"
      aria-label="gallery"
      style={
        {
          // backgroundColor: 'lightgreen'
          // backgroundImage: 'url(elements/circle3-yellow.svg)'
        }
      }
    >
      {images.map((img) => {
        return (
          <div key={img.src} className="carousel__item">
            <img className="carousel__img" src={img.src} alt={img.alt} />
          </div>
        )
      })}
    </div>
  )
}
