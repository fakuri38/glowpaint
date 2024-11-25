import React from 'react';
import styles from './Gallery.module.css';

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/355426c87afebc32816a9850de2889f1c29417ae74902ac67397bd9ad82a62be?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e49eae524c2594f6cb6ff36f3120115b5f73061f4bec06c68c59a1ef049914cd?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8af0785f3261b187db4b3b470405c87bf583a8c83953034d28d33ee41de8013?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/58dc8f8599775502bebcc28a4c70e60ed48bcd99b1a157cb9d3b52decd07d20b?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/182bd09cead3936fcf4fe84d66d81860f0a5acf33bc60d0bddbcbf550956a518?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a103454a4437153da5718f1d179419749f222a2b6481e7a955c200bda2f9737?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 6" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/002f21f8d61a723d17b0f845e16328036b41c4fb5a8836158d12dab0ac7b8776?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 7" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06c863c1e1046dc07bf9b3ae4357767101d30fb2cb1b356930cdbe776607cd22?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 8" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0de1c85c605f7ab35ee51f3f3b0c767c60a118bf26e503bf1735004322cbd559?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", alt: "Past event highlight 9" }
];

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.galleryTitle}>Shining Moments From Past Events</h2>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={styles.galleryImage}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
