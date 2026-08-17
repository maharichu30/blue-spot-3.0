import { useEffect, useRef, useState } from "react";

import locationMap from "../assets/images/location_map.png";
import locationVideo1 from "../assets/videos/location3.mp4";
import locationVideo2 from "../assets/videos/location4.mp4";

const mediaItems = [
   {
    type: "image",
    src: locationMap,
    label: "Location View",
  }, 
  {
    type: "video",
    src: locationVideo2,
    label: "ECR Coastal Corridor",
  },
  {
    type: "video",
    src: locationVideo1,
    label: "Coastal Experience",
  },
  {
    type: "image",
    src: locationMap,
    label: "Beach Lifestyle",
  },
];

const locations = [
  {
    distance: "ECR",
    title: "East Coast Road",
    description:
      "A scenic coastal corridor connecting Chennai and Puducherry.",
  },
  {
    distance: "NEARBY",
    title: "Mahabalipuram",
    description:
      "A historic coastal destination known for its heritage and beaches.",
  },
  {
    distance: "COAST",
    title: "Beach Lifestyle",
    description:
      "Designed around the appeal of living close to the shoreline.",
  },
];

export default function Location() {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const activeMedia = mediaItems[activeIndex];

  // ==========================================
  // CLEAR TIMER
  // ==========================================

  const clearSlideTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // ==========================================
  // NEXT SLIDE
  // ==========================================

  const nextSlide = () => {
    clearSlideTimer();

    setActiveIndex(
      (prev) => (prev + 1) % mediaItems.length
    );
  };

  // ==========================================
  // PREVIOUS SLIDE
  // ==========================================

  const previousSlide = () => {
    clearSlideTimer();

    setActiveIndex(
      (prev) =>
        (prev - 1 + mediaItems.length) %
        mediaItems.length
    );
  };

  // ==========================================
  // AUTO SLIDE FOR IMAGES
  // ==========================================

  useEffect(() => {
    clearSlideTimer();

    // Videos move to next slide when video ends.
    if (activeMedia.type === "video") {
      return;
    }

    // Images stay for 5 seconds.
    timerRef.current = setTimeout(() => {
      setActiveIndex(
        (prev) => (prev + 1) % mediaItems.length
      );
    }, 5000);

    return () => {
      clearSlideTimer();
    };
  }, [activeIndex, activeMedia.type]);

  // ==========================================
  // VIDEO AUTOPLAY
  // ==========================================

  useEffect(() => {
    if (activeMedia.type !== "video") {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    // Start video from beginning.
    video.currentTime = 0;

    // Make sure browser allows autoplay.
    video.muted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log(
          "Video autoplay waiting for browser:",
          error
        );
      }
    };

    // Try immediately.
    startVideo();

    // Try again when video is ready.
    video.addEventListener(
      "loadeddata",
      startVideo
    );

    video.addEventListener(
      "canplay",
      startVideo
    );

    return () => {
      video.removeEventListener(
        "loadeddata",
        startVideo
      );

      video.removeEventListener(
        "canplay",
        startVideo
      );

      video.pause();
    };
  }, [activeIndex, activeMedia.type]);

  // ==========================================
  // VIDEO ENDED
  // ==========================================

  const handleVideoEnded = () => {
    nextSlide();
  };

  return (
    <section
      id="location"
      className="
        bg-[#f7f5ef]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1500px]">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div
          className="
            mb-10
            grid
            gap-5
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          <div>

            <div
              className="
                mb-4
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#0b5d83]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#0b5d83]
                "
              >
                Location
              </span>
            </div>

            <h2
              className="
                font-serif
                text-4xl
                leading-tight
                tracking-[-0.03em]
                text-[#062033]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Connected to

              <span
                className="
                  block
                  italic
                  text-[#0b5d83]
                "
              >
                the coast.
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-2xl
              text-base
              leading-7
              text-[#526774]
              sm:text-lg
              sm:leading-8
            "
          >
            Positioned along the ECR corridor, Blue Spot 3.0
            brings coastal living together with convenient
            access to the region's growing destinations
            and everyday essentials.
          </p>
        </div>


        {/* =====================================
            MEDIA + LOCATION DETAILS
        ====================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[1.45fr_0.55fr]
          "
        >

          {/* ===================================
              MEDIA SLIDER
          ==================================== */}

          <div
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[1.5rem]
              bg-[#dfe5e5]
              sm:min-h-[480px]
              lg:min-h-[540px]
            "
          >

            {/* =================================
                MEDIA ITEMS
            ================================= */}

            {mediaItems.map(
              (media, index) => {
                const isActive =
                  index === activeIndex;

                return (
                  <div
                    key={index}
                    className={`
                      absolute
                      inset-0
                      transition-opacity
                      duration-700
                      ease-in-out
                      ${
                        isActive
                          ? "z-10 opacity-100"
                          : "z-0 opacity-0"
                      }
                    `}
                  >

                    {media.type === "video" ? (

                      <video
                        key={
                          isActive
                            ? `active-video-${index}`
                            : `inactive-video-${index}`
                        }
                        ref={
                          isActive
                            ? videoRef
                            : null
                        }
                        src={media.src}
                        muted
                        autoPlay={isActive}
                        playsInline
                        preload="auto"
                        controls={false}
                        onEnded={
                          isActive
                            ? handleVideoEnded
                            : undefined
                        }
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                        "
                      />

                    ) : (

                      <img
                        src={media.src}
                        alt={media.label}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                        "
                      />

                    )}

                  </div>
                );
              }
            )}


            {/* =================================
                DARK GRADIENT
            ================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                bg-gradient-to-t
                from-[#062033]/70
                via-[#062033]/10
                to-transparent
              "
            />


            {/* =================================
                TOP LABEL
            ================================= */}

            <div
              className="
                absolute
                left-5
                top-5
                z-30
                rounded-full
                border
                border-white/20
                bg-[#062033]/70
                px-4
                py-2
                backdrop-blur-md
                sm:left-7
                sm:top-7
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                "
              >
                {activeMedia.label}
              </p>
            </div>


            {/* =================================
                LOCATION LABEL
            ================================= */}

            <div
              className="
                absolute
                bottom-16
                left-5
                z-30
                rounded-xl
                border
                border-white/20
                bg-[#062033]/80
                px-5
                py-4
                backdrop-blur-md
                sm:bottom-20
                sm:left-7
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                "
              >
                Blue Spot 3.0
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-white/70
                "
              >
                ECR Coastal Corridor
              </p>
            </div>


            {/* =================================
                PREVIOUS BUTTON
            ================================= */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="
                absolute
                left-4
                top-1/2
                z-40
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-[#062033]/60
                text-2xl
                text-white
                backdrop-blur-md
                transition
                duration-300
                hover:bg-[#062033]
                sm:left-6
              "
            >
              ‹
            </button>


            {/* =================================
                NEXT BUTTON
            ================================= */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                absolute
                right-4
                top-1/2
                z-40
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-[#062033]/60
                text-2xl
                text-white
                backdrop-blur-md
                transition
                duration-300
                hover:bg-[#062033]
                sm:right-6
              "
            >
              ›
            </button>


            {/* =================================
                SLIDER DOTS
            ================================= */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-40
                flex
                -translate-x-1/2
                items-center
                gap-2
              "
            >
              {mediaItems.map(
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-label={`Go to slide ${
                      index + 1
                    }`}
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }
                    `}
                  />
                )
              )}
            </div>

          </div>


          {/* =====================================
              LOCATION CARDS
          ====================================== */}

          <div
            className="
              flex
              flex-col
              gap-3
            "
          >

            {locations.map(
              (item, index) => (

                <div
                  key={item.title}
                  className="
                    group
                    flex-1
                    rounded-[1.25rem]
                    border
                    border-[#062033]/10
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    sm:p-7
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#0b5d83]
                      "
                    >
                      {item.distance}
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#062033]/10
                        text-sm
                        text-[#0b5d83]
                        transition
                        group-hover:bg-[#062033]
                        group-hover:text-white
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  <h3
                    className="
                      mt-7
                      font-serif
                      text-2xl
                      text-[#062033]
                      sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#61737e]
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {item.description}
                  </p>

                </div>

              )
            )}

          </div>

        </div>


        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-[#062033]/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              max-w-2xl
              text-base
              leading-7
              text-[#526774]
            "
          >
            A location chosen for its coastal character,
            accessibility and long-term potential.
          </p>

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#0b5d83]
            "
          >
            Live closer to the sea →
          </span>

        </div>

      </div>
    </section>
  );
}