import { useState, useEffect } from 'react';
import { useFilteredImages } from '@/context/FilteredImagesContext';
import ImageComponent from '@/components/ImageComponent';
import TableComponent from '@/components/TableComponent';
import { useSample } from '@/context';
import { useParams } from 'react-router-dom';

const SampleComponent = () => {
  const { id } = useParams();
  const { sample } = useSample();
  const { selectedFilterKeys } = useFilteredImages();

  if (!id || !sample || !selectedFilterKeys) return null;
   
  const filteredImages = selectedFilterKeys.length
  ? Object.keys(sample.images).filter((imageKey) =>
      selectedFilterKeys.includes(imageKey)
    )
  : Object.keys(sample.images);

  return (
    <div className='p-4 h-full flex flex-col gap-4'>
      <div className="overflow-auto flex-1 flex flex-col gap-4">
        {filteredImages.map((imageKey) => (
          <ImageComponent key={imageKey} imageKey={imageKey} />
        ))}
      </div>

      <TableComponent />
    </div>
  );
};

export default SampleComponent;
