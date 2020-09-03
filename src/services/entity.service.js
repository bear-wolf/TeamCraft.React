import API from "../utils/api";

export class EntityService {
    static getTechnicalSupport = () => {
        return API.get('/entity/getDataOne/TechnicalSupport');
    };
}
