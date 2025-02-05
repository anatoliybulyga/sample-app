import { useControls } from "react-zoom-pan-pinch";

const ImageControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute z-10 top-4 left-5 flex gap-2">
      <button
        className='px-4 py-2 rounded-lg min-w-[40px] font-medium transition-all duration-300 bg-gray-800 text-white hover:bg-gray-900 focus:ring-0 cursor-pointer'
        onClick={() => zoomIn()}
      >
        +
      </button>
      <button
        className='px-4 py-2 rounded-lg min-w-[40px] font-medium transition-all duration-300 bg-gray-800 text-white hover:bg-gray-900 focus:ring-0 cursor-pointer'
        onClick={() => zoomOut()}
      >
        -
      </button>
      <button
        className='px-4 py-2 rounded-lg min-w-[40px] font-medium transition-all duration-300 bg-gray-800 text-white hover:bg-gray-900 focus:ring-0 cursor-pointer'
        onClick={() => resetTransform()}
      >
        x
      </button>
    </div>
  );
};

export default ImageControls;
