import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";                                                                                                                                                                               
import  IconButton  from "@mui/material/IconButton";                                                                                                                                                                                              
import RecordDataService from '../services/record.service';
import {IRecordRequestData,IRecord} from '../types/record.type'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type search_bar_props = {
handle_submit: (value: string) => void;
}
export default function SearchBar(props:search_bar_props) {
  const [value,setValue] = React.useState("")

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      const request_data: IRecordRequestData = {
        url: value
      }
      props.handle_submit(value);
      RecordDataService.search(request_data).then((response)=>{
          const response_data: IRecord = response.data;
          props.handle_submit(response_data.meeting_id);
	  setValue("")
        })

    }}>                                                                                                                                                                           
    <TextField                                                                                                                                                                                                                           
    onChange={(e) => setValue(e.target.value) } 
      fullWidth                                                                                                                                                            
      id="filled-search"
      label="Cole aqui o link da gravação do BigBlueButton"
      color="primary"
      type="search" data-testid="search-text-field"
      InputProps={{                                                                                                                                                                                                                      
        endAdornment: (                                                                                                                                                                                                                  
          <InputAdornment color="primary" position="start">                                                                                                                                                                                              
            <IconButton
              type="submit"
              data-testid="submit-button"
              >                                                                                                                                                                                                   
              <ChevronRightIcon />                                                                                                                                                                                                       
            </IconButton>                                                                                                                                                                                                                
          </InputAdornment>                                                                                                                                                                                                              
        )                                                                                                                                                                                                                                
      }}                                                                                                                                                                                                                                 
    />                                                                                                                                                                                                                                   
  </form>
  )
}

