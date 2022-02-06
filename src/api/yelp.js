import axios from "axios";
//import env from "react-native-dotenv";
import config from "../../config";

export default axios.create({
    baseURL: `${config.API_URL}`,
    headers: {
        Authorization: `Bearer ${config.API_KEY}`
    }
});