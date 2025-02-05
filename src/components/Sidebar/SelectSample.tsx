import { useState, type ChangeEvent } from 'react';
import { useParams, useNavigate } from "react-router";
import dummyData from '@/dummyData.json';

const SelectSample = () => {
  const { id } = useParams();
  const [sampleIds] = useState(() =>
    Object.keys(dummyData.invoice)
  );
  const navigate = useNavigate();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (!selectedValue) {
      navigate('/');
    } else {
      navigate(`/sample/${selectedValue}`);
    }
  };

  return (
    <div>
      <label htmlFor='sample-id' className="text-xl font-semibold">Select sample</label>
      <select
        className="mt-4 w-full bg-gray-700 text-white p-2 rounded"
        onChange={handleSelectChange}
        id='sample-id'
        value={id || ''}
      >
        <option value={''}>None</option>
        {
          sampleIds.map(id => <option key={id} value={id}>{id}</option>)
        }
      </select>
    </div>
  );
};

export default SelectSample;

