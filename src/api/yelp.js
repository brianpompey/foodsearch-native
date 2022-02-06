import axios from "axios";
//import env from "react-native-dotenv";
import config from "../../config";

export default axios.create({
    baseURL: `${config.API_URL}`,
    headers: {
        Authorization: 'Bearer Em_itxQHmFIJDmJqXUu2LAz5q1JZuOEMEKzYf4vewuldrFyj-AR29zERNKrqhs3f3WTr6YstG_GWd5I7WKglhVmC4dfUoPFJITDKyz9ZY5TT7ipg1VkWoAAoOqv0YXYx'
    }
});