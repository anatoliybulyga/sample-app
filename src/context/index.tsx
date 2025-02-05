import { createContext, ReactNode, useContext, useEffect, useState, type Dispatch } from 'react';
import dummyData from '@/dummyData.json';
import { useParams } from 'react-router';
import { Coordinate, DocumentField, ResultsMatches, SampleCoordsData, SampleType } from '@/types';

interface SampleContextProps {
  sample: SampleType | null;
  coordsData: SampleCoordsData | null;
  sampleItems: Record<keyof SampleType, Record<string, string>> | null;
  setSampleItems: Dispatch<React.SetStateAction<Record<keyof SampleType, Record<string, string>> | null>>;
}

const SampleContext = createContext<SampleContextProps | null>(null)

export const SampleProvider = ({ children }: { children: ReactNode }) => {
  const { id } = useParams();

  const [sample, setSample] = useState<SampleType | null>(null);
  const [sampleItems, setSampleItems] = useState<Record<keyof SampleType, Record<string, string>> | null>(null);
  const [coordsData, setCoordsData] = useState<SampleCoordsData | null>(null);

  useEffect(() => {
    if (!id) {
      setSample(null);
      return;
    }

    const selectedSample = (dummyData.invoice as unknown as Record<string, SampleType>)[id];

    if (selectedSample) {
      setSample(selectedSample);
    } else {
      setSample(null);
    }
  }, [id]);

  useEffect(() => {
    if (sample) {
      const selectedSampleItems =
        (Object.keys(sample) as unknown as (keyof SampleType)[])
          .reduce((acc, key) => {
            const item = sample[key];

            if (Object.values(ResultsMatches).includes(item.result as ResultsMatches) && !!item.unique_id) {
              acc[key] = {};

              Object.keys(item).forEach(itemKey => {
                if (itemKey.includes('_value')) {
                  acc[key][itemKey] = item[itemKey] as string;
                  acc[key]['id'] = item.unique_id as string;
                }
              });
            }

            return acc;
          }, {} as Record<keyof SampleType, Record<string, string>>);

      const coords = Object.keys(sample.images).reduce((acc, imageKey) => {
        (Object.values(sample) as DocumentField[]).forEach((sampleObj) => {
          if (sampleObj.unique_id) {
            const unique_id = sampleObj.unique_id;
  
            if (!Object.keys(acc).includes(unique_id)) {
              acc[unique_id] = {};
            }
  
            const coordArray = sampleObj[`${imageKey}_coords`] as Coordinate[] | undefined;
  
            acc[unique_id][imageKey] = coordArray?.[0] ?? undefined;
          }
        });
  
        return acc;
      }, {} as SampleCoordsData);

      setSampleItems(selectedSampleItems);
      setCoordsData(coords);
    } else {
      setSampleItems(null);
      setCoordsData(null);
    }
  }, [sample]);

  return (
    <SampleContext.Provider
      value={{
        sample,
        coordsData,
        sampleItems,
        setSampleItems
      }}
    >
      {children}
    </SampleContext.Provider>
  );
}

export const useSample = () => {
  const context = useContext(SampleContext)
  if (!context) {
    throw new Error('useSample must be used within SampleProvider')
  }
  return context
}
