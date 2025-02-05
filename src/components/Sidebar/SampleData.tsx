import { useSample } from '@/context';
import { useHoveredItem } from '@/context/HoveredItem';
import { SampleType } from '@/types';
import { getItemLabel, getItemValueLabel } from '@/utils';

const SampleSubData = ({ data }: { data: Record<string, string> }) => {
  const { setHoveredItem } = useHoveredItem();

  return (
    <div className='pl-2'>
      {Object.keys(data).filter(key => key !== 'id').map(key => (
        <div key={key} className='flex gap-2'>
          <p className='capitalize'>{getItemValueLabel(key)}:</p>
          <p
            className='cursor-pointer'
            onMouseOver={() => setHoveredItem({ id: data.id, value: key })}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {data[key]}
          </p>
        </div>
      ))}
    </div>
  );
}

const SampleData = () => {
  const { sampleItems } = useSample();

  if (!sampleItems) return null;

  return (
    <div className='py-6'>
      <h4 className='mb-3 text-xl'>Sample items</h4>
      <div className='flex flex-col gap-6'>
        {(Object.keys(sampleItems) as unknown as (keyof SampleType)[]).map(key => {
          const label = getItemLabel(key);
          return (
            <div key={key}>
              <p className='capitalize'>{label}</p>
              <SampleSubData data={sampleItems[key]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SampleData;
