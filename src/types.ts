export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export interface EventDetails {
  title: string;
  dateStr: string;
  hijriDate: string;
  timeStr: string;
  venue: string;
  venueAddress: string;
  lunchTime: string;
  googleMapsUrl: string;
}
