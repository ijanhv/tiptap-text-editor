import React, { useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1625860448208-3ae5e2f65e5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1594032194509-0056023973b2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731094113769-98c915453293?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519187903022-c0055ec4036a?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508717334315-37b159f24d04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731082417879-710ff0c868ae?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1731100062072-3904a79ff817?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1671647122910-3fa8ab4990cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDB8fHxlbnwwfHx8fHw%3D    ",
  "https://images.unsplash.com/photo-1625860448208-3ae5e2f65e5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1594032194509-0056023973b2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731094113769-98c915453293?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519187903022-c0055ec4036a?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PanoramaSlider = () => {
  useEffect(() => {}, []);
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-4 animate-scroll">
        {/* First set of images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Panoramic image ${index + 1}`}
            className="h-auto w-80 object-cover flex-shrink-0"
          />
        ))}

        {/* Duplicated set of images for infinite scroll effect */}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt={`Panoramic image ${index + 1}`}
            className="h-auto w-80 object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default PanoramaSlider;

// .container::before,
// .container::after {
//   content: "";
//   position: absolute;
//   width: calc(100% + 50 px);
//   height: 50px;
//   border-radius: 50%;
//   background: #F8F4ED;
//   left: -25px;
// }

// .container::before {
//   top: -70px;
// }

// .container::after {
//   bottom: -70px;
// }

// <div className="h-[44vh] pb-20 ">
//   <Swiper
//     effect="coverflow"
//     grabCursor
//     spaceBetween={0}
//     slidesPerView={7}
//     coverflowEffect={{
//       rotate: 10,
//       stretch: 0,

//       depth: 20,

//       //   slideShadows: true,
//     }}
//     creativeEffect={{
//         shadowPerProgress: false,
//       prev: {

//         translate: ["-250%", 0, -1],
//       },
//       next: {
//         translate: ["250%", 0, 0],
//       },
//     }}
//     modules={[Navigation, Pagination, EffectCoverflow]}
//     // pagination={{ clickable: true }}

//     navigation
//     className="w-full h-full"
//   >
//     {images.map((image, index) => (
//       <SwiperSlide
//       style={{
//         boxShadow: "none"
//       }}
//         key={index}
//         className="h-32 w-28 relative rounded-lg  md:mx-6  overflow-hidden "

//       >
//         <Image
//         unoptimized
//         src={image}
//         alt=""
//         fill
//         className="h-full w-full object-cover"
//         />

//       </SwiperSlide>
//     ))}
//     {/* Add more slides as needed */}
//   </Swiper>
// </div>
//     <div className="overflow-hidden relative">
