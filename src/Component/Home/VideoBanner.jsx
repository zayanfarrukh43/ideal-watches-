import React from "react";

const VideoBanner = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden md:h-[900px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/watches.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};

export default VideoBanner;