import locationMap from "../assets/images/location_map.png";

const locations = [
  {
    distance: "ECR",
    title: "East Coast Road",
    description: "A scenic coastal corridor connecting Chennai and Puducherry.",
  },
  {
    distance: "NEARBY",
    title: "Mahabalipuram",
    description: "A historic coastal destination known for its heritage and beaches.",
  },
  {
    distance: "COAST",
    title: "Beach Lifestyle",
    description: "Designed around the appeal of living close to the shoreline.",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="bg-[#f7f5ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0b5d83]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b5d83]">
                Location
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#062033] sm:text-5xl lg:text-6xl">
              Connected to
              <span className="block italic text-[#0b5d83]">
                the coast.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#526774] sm:text-lg sm:leading-8">
            Positioned along the ECR corridor, Blue Spot 3.0 brings
            coastal living together with convenient access to the
            region's growing destinations and everyday essentials.
          </p>
        </div>

        {/* Map + Details */}
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          {/* Map image */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-[1.5rem] bg-[#dfe5e5] sm:min-h-[480px] lg:min-h-[540px]">
            <img
              src={locationMap}
              alt="Blue Spot 3.0 location map"
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062033]/50 via-transparent to-transparent" />

            {/* Map label */}
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#062033]/80 px-5 py-4 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Blue Spot 3.0
              </p>

              <p className="mt-1 text-sm text-white/70">
                ECR Coastal Corridor
              </p>
            </div>
          </div>

          {/* Location cards */}
          <div className="flex flex-col gap-3">
            {locations.map((item, index) => (
              <div
                key={item.title}
                className="group flex-1 rounded-[1.25rem] border border-[#062033]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]">
                    {item.distance}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#062033]/10 text-sm text-[#0b5d83] transition group-hover:bg-[#062033] group-hover:text-white">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#062033] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#61737e] sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#062033]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-7 text-[#526774]">
            A location chosen for its coastal character, accessibility
            and long-term potential.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]">
            Live closer to the sea →
          </span>
        </div>
      </div>
    </section>
  );
}