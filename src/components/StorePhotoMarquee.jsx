const STORE_GALLERY_IMAGES = [
  { src: "/1.jpeg", alt: "빨간토마토피자 매장 사진 1" },
  { src: "/2.jpeg", alt: "빨간토마토피자 매장 사진 2" },
  { src: "/3.jpeg", alt: "빨간토마토피자 매장 사진 3" },
  { src: "/4.jpeg", alt: "빨간토마토피자 매장 사진 4" },
  { src: "/5.jpeg", alt: "빨간토마토피자 매장 사진 5" },
];

export default function StorePhotoMarquee() {
  const loopImages = [...STORE_GALLERY_IMAGES, ...STORE_GALLERY_IMAGES];

  return (
    <section className="store-photo-marquee" aria-label="매장 사진">
      <div className="store-photo-marquee-viewport">
        <div className="store-photo-marquee-track">
          {loopImages.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              className="store-photo-marquee-image"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
