import axios from 'axios';

export class EventService {

    getEvents() {
        return axios.get('api/assets/demo/data/scheduleevents.json')
            .then(res => res.data.data);
    }
}