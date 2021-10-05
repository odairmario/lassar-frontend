import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@mui/material/Container';
import SearchBar from '../components/Search';
import Box from '@mui/material/Box';
import WebSocketContext from '../contexts/WebSocket'
import WebSocketContextType from '../types/websocket.type'
import {RecordStatusEnum,RecordContextType,IRecord} from '../types/record.type';
import RecordContext from '../contexts/RecordContext';
import RecordDetail from '../components/RecordDetail'
import RecordDataService from '../services/record.service'

function ListRecords() {
  const {records,deleteRecord} = React.useContext(RecordContext) as RecordContextType;
  const download = (record_id: string) => {
    RecordDataService.download(record_id).then((response)=>{
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',`${record_id}.mp4`);
        document.body.appendChild(link)
        link.click();
        });
  }
  return (
      <Grid container spacing={1} direction="row" alignItems="center" justifyContent="space-around">
        {
        records.map((record: IRecord) => (
              <Grid xs={12} md={6} sm={6} lg={4} item key={record.meeting_id}>
                  <RecordDetail 
                      key={record.meeting_id}
                      delete_record={deleteRecord}
                      download={download}
                      record={record}

                    />
              </Grid>
              ))
        }
      </Grid >
      )
}
function HomePage() {
  const [new_search,setNewSearch] = React.useState("")
  const {subscriber} = React.useContext(WebSocketContext)as WebSocketContextType;
  React.useEffect(()=>{
      if (new_search.length !== 0) 
        subscriber({meeting_id:new_search,status:RecordStatusEnum.New});
      
      setNewSearch("");
      },[new_search,subscriber])
  return (
      <Container disableGutters maxWidth="lg" component="main"
				sx={{
				pt: 6,
				pb: 4,
 			}}>
        <Box sx={{pt:4, pb:3}}>
          <SearchBar handle_submit={setNewSearch}/>
        </Box>
        <Box>
            <ListRecords />
        </Box>
      </Container>

        
      )
};

export default HomePage;
