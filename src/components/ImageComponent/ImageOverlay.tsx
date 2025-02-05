import { useSample } from '@/context';
import ImageOverlayBoundary from './ImageOverlayBoundary';

type ImageOverlayProps = {
  imageKey: string;
}

const ImageOverlay = ({ imageKey }: ImageOverlayProps) => {
  const { coordsData } = useSample();

  if (!coordsData) return null;


  return (
    <div className="absolute z-1 w-full h-full">
      {
        Object.keys(coordsData).map(id =>
          <ImageOverlayBoundary
            key={id}
            id={id}
            coords={coordsData[id][imageKey]?.['coords']}
            imageKey={imageKey}
          />
        )
      }
    </div>
  );
};

export default ImageOverlay;
