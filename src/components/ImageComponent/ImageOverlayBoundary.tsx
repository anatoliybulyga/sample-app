import { useHoveredItem } from "@/context/HoveredItem";

type ImageOverlayBoundaryProps = {
  id: string;
  coords?: [number, number, number, number];
  imageKey: string;
}

const adjustment = .5;

const ImageOverlayBoundary = ({ id, coords, imageKey }: ImageOverlayBoundaryProps) => {
  const { hoveredItem } = useHoveredItem();

  if (!coords) return null;

  return (
    <div
      className="absolute rounded-md border-2 border-red-500 transition-opacity delay-150 duration-300 ease-in-out"
      style={{
        left: `${coords[0] * 100 - adjustment}%`,
        top: `${coords[1] * 100 - adjustment}%`,
        width: `${(coords[2] - coords[0]) * 100 + adjustment * 2}%`,
        height: `${(coords[3] - coords[1]) * 100 + adjustment * 2}%`,
        opacity: (hoveredItem?.id === id && hoveredItem?.value.startsWith(imageKey)) ? 1 : 0
      }}
    >
      <div className="absolute inset-0 bg-red-200 opacity-50 pointer-events-none rounded-b-sm" />

      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute -left-[35px] top-1/2 -translate-y-1/2 px-2 rounded-full border-2 border-red-500 bg-white text-black">
          <div className="absolute inset-0 bg-red-200 opacity-50 pointer-events-none rounded-full" />

          <span className="relative text-black">{id}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlayBoundary;
