export interface Spot {
  city: string;
  creator: string;
  description?: string;
  difficultyLevel: number;
  lokalizacja: Lokalizacja;
  name: string;
  rate: number;
}

export interface Lokalizacja {
  latitude: number;
  longitude: number;
}
