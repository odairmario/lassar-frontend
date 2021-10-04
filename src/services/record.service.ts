import http from "../http-common";
import {IRecordRequestData,IRecord} from "../types/record.type";

class RecordDataService {
    search(data: IRecordRequestData) {
        return http.post("record/search",data);
    };
    download(meeting_id: string) {
        return http({
            url:`record/download/${meeting_id}/`,
            method: 'GET',
            responseType: 'blob',
        });
    };

}
export default new RecordDataService();
