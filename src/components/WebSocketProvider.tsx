import React from 'react';
import {WebSocketContext} from '../contexts/WebSocket';
import {RecordContextType,IRecord} from '../types/record.type';
import RecordContext from '../contexts/RecordContext'
import {WEBSOCKET_ADDRESS} from '../constants'
import useWebSocket from 'react-use-websocket';

const WebSocketProvider: React.FC<React.ReactNode> =({children}) => {
  const {records,newRecord,updateRecord} = React.useContext(RecordContext) as RecordContextType;
  const {sendMessage} = useWebSocket(WEBSOCKET_ADDRESS,{
    onOpen: () => {
      console.log("connected")
    },
    onMessage: (message)=> {
      const data = JSON.parse(message.data);
      // check if exists propety meeting_id
      if (data.hasOwnProperty('meeting_id') && data.hasOwnProperty("status")) {
        if(records.find(record =>record.meeting_id === data.meeting_id)) 
          updateRecord(data.meeting_id,data.status);
        else 
          newRecord(data);

    }}
  });
  const subscriber = (record:IRecord) => {
    if (! records.find(r => r.meeting_id === record.meeting_id)) {
      sendMessage(JSON.stringify({meeting_id:record.meeting_id}));
    }
  }
  return (
    <WebSocketContext.Provider value={{subscriber}} >
      {children}
    </WebSocketContext.Provider>
  )

}
export default WebSocketProvider;
