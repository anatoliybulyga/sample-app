import ImageComponent from '@/components/ImageComponent';
import TableComponent from '@/components/TableComponent';
import { useSample } from '@/context';
import { useParams } from 'react-router-dom';

const SampleComponent = () => {
  const { id } = useParams();
  const { sample } = useSample();

  if (!id || !sample) return null;

  return (
    <div className='p-4 h-full flex flex-col gap-4'>
      <div className="overflow-auto flex-1 flex flex-col gap-4">
        {Object.keys(sample.images).map(imageKey => <ImageComponent key={imageKey} imageKey={imageKey} />)}
      </div>

      <TableComponent />
    </div>
  );
};

export default SampleComponent;
