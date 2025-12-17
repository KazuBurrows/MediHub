declare global {

type MatrixCell = {
  value: string | number;
  editable?: boolean;
};

type Matrix = MatrixCell[][];

interface ScheduleCell {
  session?: string;
  speciality?: string;
  subspeciality?: string;
  acute?: number;
  pediatric?: number;
  anaestheticType?: string;
  datetime?: string;
  staff?: string[];

}

interface TheatreSchedule {
  theatre: string;
  am: ScheduleCell[];
  pm: ScheduleCell[];
}

interface ScheduleMatrixProps {
  facility: string;
  theatres: TheatreSchedule[];
}

}

export {};
