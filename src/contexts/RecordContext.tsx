import React from 'react';
import {RecordContextType} from '../types/record.type'

const RecordContext = React.createContext<RecordContextType | null>(null);
export default RecordContext;
