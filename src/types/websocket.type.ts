import {IRecord} from "./record.type"
export type WebSocketContextType = {
    subscriber: (record:IRecord) => void;
}

export default WebSocketContextType;
