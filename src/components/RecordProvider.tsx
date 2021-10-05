import React from 'react';
import RecordContext from '../contexts/RecordContext'
import {IRecord,RecordStatusEnum} from '../types/record.type'

export const RecordProvider: React.FC<React.ReactNode> = ({children})=> {
    const [records,setRecords] = React.useState<IRecord[]>([]);
    const newRecord = (record: IRecord) => {
      setRecords([...records,record]);
    };
    const updateRecord = (meeting_id:string,status:RecordStatusEnum) => {
      records.filter((record:IRecord) => {
          if (record.meeting_id === meeting_id) {
            record.status = status;
            setRecords([...records]);
          }
          })
    };
    const deleteRecord = (meeting_id:string) => {
      const newrecords = records.filter((record:IRecord) => record.meeting_id !== meeting_id)
        console.log("cheguei aqui")
        console.log(newrecords)
      setRecords(newrecords);
  }
    return (
        <RecordContext.Provider value={{records,newRecord,updateRecord,deleteRecord}} >
          {children}
        </RecordContext.Provider>
    );

}


