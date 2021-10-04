export enum RecordStatusEnum{
    New = 0,
    Pending = 1,
    Completed = 3,
    RecordNotFound = 4,
    RecordProcessingError = 5,
}
export interface IRecord {
    meeting_id: string
    status: RecordStatusEnum
}
export interface IRecordRequestData {
    url: string
}
export type RecordContextType = {
    records: IRecord[];
    newRecord: (record: IRecord) => void;
    updateRecord: (meeting_id:string, status:RecordStatusEnum) => void;
    deleteRecord: (meeting_id:string) => void;
}
