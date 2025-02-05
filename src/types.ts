export enum ResultsMatches {
  EXACT_MATCH = "exact_match",
  MATCH = "match",
  MISMATCH = "mismatch",
  AMBIGUOUS = "ambiguous",
  SINGLETON = "singleton",
}

export interface Coordinate {
  coords: [number, number, number, number];
  page: number;
}

export interface DynamicFieldValues {
  [key: string]: string | string[] | Coordinate[] | undefined;
}

export interface DocumentField extends DynamicFieldValues {
  thinking?: string;
  result: ResultsMatches;
  unique_id?: string;
}

export interface SampleType {
  [key: `${string}:${string}`]: DocumentField;
  images: {
    [key: string]: string;
  };
}

export type SampleCoordsData = Record<string, Record<string, Coordinate | undefined>>;

