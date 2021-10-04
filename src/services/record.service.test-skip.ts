//
//import axios, { AxiosStatic } from 'axios'
//import RecordDataService from './record.service'
//import {IRecordRequestData,IRecordResponseData} from '../types/record.type'
//
//interface AxiosMock extends AxiosStatic {
//  mockResolvedValue: Function
//  mockRejectedValue: Function
//}
//
//jest.mock('axios')
//const mockAxios = axios as jest.Mocked<typeof axios>;
//
//
//
//describe('test recordDataservices',()=>{
//    it("test search request",()=>{
//        const request_data:  IRecordRequestData = {
//            url: "http://bbbserver.test/playback/presentation/2.3/bf0a5dbc0b893bebc8d7c76ce2a6dad2617916bf-1630953904626"
//        }
//        const response_fixtures = {"meeting_id":"bf0a5dbc0b893bebc8d7c76ce2a6dad2617916bf-1630953904626","status":1};
//        mockAxios.get.mockResolvedValue(response_fixtures);
//        mockAxios.get.mockRejectedValue('Network error: Something went wrong');
//
//
//        const response =RecordDataService.create(request_data).then((response)=>{
//            return response;
//
//        });
//        console.log(response);
//
//    })
//
//})
const te = null;
export  default te;
