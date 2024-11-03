export type LivestockType = 'poultry' | 'piggery';

export interface Farm {
  id: string;
  name: string;
  location: string;
  livestockTypes: LivestockType[];
  capacity: {
    [key in LivestockType]?: number;
  };
  currentCount: {
    [key in LivestockType]?: number;
  };
}

export interface Visit {
  id: string;
  farmId: string;
  date: string;
  type: 'routine' | 'emergency' | 'vaccination';
  notes: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface HealthRecord {
  id: string;
  farmId: string;
  livestockType: LivestockType;
  date: string;
  mortality: number;
  symptoms?: string[];
  treatment?: string;
  vaccination?: string;
}

export interface FeedRecord {
  id: string;
  farmId: string;
  livestockType: LivestockType;
  date: string;
  feedType: string;
  quantity: number;
  cost: number;
}