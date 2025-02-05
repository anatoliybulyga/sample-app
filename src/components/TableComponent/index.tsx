import { useSample } from "@/context";
import { SampleType } from "@/types";
import { getItemLabel, getItemValueLabel } from "@/utils";


const TableComponent = () => {
  const { sampleItems, setSampleItems } = useSample(); 

  if (!sampleItems) return null;

  const columns = Object.keys(sampleItems) as (keyof SampleType)[];

  const rowKeys = Array.from(
    new Set(
      columns.flatMap((col) =>
        Object.keys(sampleItems[col]).filter((key) => key.endsWith("_value"))
      )
    )
  );

  const handleCellChange = (column: string, rowKey: string, value: string) => {
    setSampleItems((prevData) => {
      if (!prevData) return null;

      if (!(column in prevData)) {
        return prevData;
      }
  
      const columnKey = column as keyof SampleType;
  
      return {
        ...prevData,
        [columnKey]: {
          ...prevData[columnKey],
          [rowKey]: value,
        },
        images: { ...prevData.images },
      };
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="border border-gray-300 shadow-md bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left text-gray-600">Keys</th>
            {columns.map((col) => (
              <th key={col} className="border w-fit p-2 text-left text-gray-600">
                {getItemLabel(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowKeys.map((rowKey) => (
            <tr key={rowKey} className="border-b hover:bg-gray-50">
              <td className="border p-2 font-semibold">{getItemValueLabel(rowKey)}</td>
              {columns.map((col) => (
                <td key={`${col}-${rowKey}`} className="border p-2">
                  {!!sampleItems[col][rowKey] && <input
                    type="text"
                    value={sampleItems[col][rowKey] || ""}
                    onChange={(e) =>
                      handleCellChange(col, rowKey, e.target.value)
                    }
                    className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter value"
                  />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
