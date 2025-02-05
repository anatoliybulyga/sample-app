import { useSample } from '@/context';
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import ImageControls from './ImageControls';
import ImageOverlay from './ImageOverlay';

type ImageComponentProps = {
  imageKey: string;
}

const ImageComponent = ({ imageKey }: ImageComponentProps) => {
  const { sample } = useSample();

  return (
    <div className='relative border rounded-lg'>
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
        wheel={{ disabled: true }}
      >
        <ImageControls />
        <TransformComponent>
          <div className='relative'>
            <ImageOverlay imageKey={imageKey} />
            <img src={`data:image/png;base64,${sample?.images[imageKey]}`} alt='document' />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageComponent;
