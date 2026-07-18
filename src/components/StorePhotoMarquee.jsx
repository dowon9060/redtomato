const STORE_GALLERY_IMAGES = [
  { src: "/1.jpeg", alt: "빨간토마토피자 매장 사진 1" },
  { src: "/2.jpeg", alt: "빨간토마토피자 매장 사진 2" },
  { src: "/3.jpeg", alt: "빨간토마토피자 매장 사진 3" },
  { src: "/4.jpeg", alt: "빨간토마토피자 매장 사진 4" },
  { src: "/5.jpeg", alt: "빨간토마토피자 매장 사진 5" },
];

function StorePhotoGroup({ images, ariaHidden = false }) {
  return (
    <div
      className="store-photo-marquee-group"
      aria-hidden={ariaHidden || undefined}
    >
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={ariaHidden ? "" : image.alt}
          className="store-photo-marquee-image"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  );
}

export default function StorePhotoMarquee() {
  return (
    <section className="store-photo-marquee" aria-label="매장 사진">
      <div className="store-photo-marquee-viewport">
        <div className="store-photo-marquee-track">
          <StorePhotoGroup images={STORE_GALLERY_IMAGES} />
          <StorePhotoGroup images={STORE_GALLERY_IMAGES} ariaHidden />
        </div>
      </div>
    </section>
  );
}
