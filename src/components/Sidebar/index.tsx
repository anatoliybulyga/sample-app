import SampleData from './SampleData';
import SelectSample from './SelectSample';

const Sidebar = () => {
  return (
    <div className="w-72 shrink-0 overflow-y-auto bg-gray-800 text-white p-4">
      <SelectSample />
      <SampleData />
    </div>
  );
};

export default Sidebar;
