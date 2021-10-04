import React from 'react';
import {WebSocketContextType}  from '../types/websocket.type'

export const WebSocketContext = React.createContext<WebSocketContextType | null>(null);
export default WebSocketContext
