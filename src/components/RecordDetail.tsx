import React from 'react';
import {RecordStatusEnum,IRecord} from '../types/record.type';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import Card from '@mui/material/Card';

import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

type record_detail_props = {
  record: IRecord;
  delete_record: (meeting_id:string) => void;
  download: (meeting_id: string) => void;
}


type record_status_props = {
  icon?: React.ReactNode;
  text: string;
};
function RecordStatus(props:record_status_props) {
  const StatusIcon=props.icon? props.icon : <ErrorIcon/>;
  return (
        <Typography
          color="textSecondary"
        >
          Status: {props.text} {StatusIcon}
        </Typography>

      )
}

export default function RecordDetail(props:record_detail_props){


  const [meeting_id,meeting_timestamp] = props.record.meeting_id.split("-")
  const record_date = new Date(Number(meeting_timestamp)).toLocaleString()
  let _status = null;
  switch (props.record.status) {
    case RecordStatusEnum.Pending:
      _status = (<RecordStatus text="Processando" icon={<CircularProgress />} />)
      break;
    case RecordStatusEnum.Completed:
      _status = (<RecordStatus text="Terminado" icon={<CheckIcon />} />)
      break;
    case RecordStatusEnum.RecordNotFound:
      _status = (<RecordStatus text="Gravação não encontrada" icon={<CloseIcon />} />)
      break;
    case RecordStatusEnum.RecordProcessingError:
      _status = (<RecordStatus text="Erro ao processar gravação" icon={<CloseIcon />} />)
      break;
    
    default:
      _status = (<RecordStatus text="Desconhecido" />);
      
  }
  const is_disabled= props.record.status !== RecordStatusEnum.Completed
  //<Button size="small" variant="contained"> Notifique por email</Button>
  return (
    <Card >
      <CardContent >
        <Typography
          color="textSecondary"
          gutterBottom
        >
          Gravação: {meeting_id}
        </Typography>
        <Divider />
        <Typography
          color="textSecondary"
        >
        Data da gravação: {record_date}
        </Typography>
        {_status}
      </CardContent>
      <CardActions>
        <Divider />
        <Button size="small" color="error" variant="contained" onClick={()=>{props.delete_record(props.record.meeting_id)}}>Cancelar</Button>
        <Button
          size="small"
          disabled={is_disabled}
          color="success"
          variant="contained"
          onClick={()=>{props.download(props.record.meeting_id)}}
        >
          Download
        </Button>
      </CardActions>
    </Card>
    )
}
