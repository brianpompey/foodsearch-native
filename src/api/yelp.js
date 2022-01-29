import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer Em_itxQHmFIJDmJqXUu2LAz5q1JZuOEMEKzYf4vewuldrFyj-AR29zERNKrqhs3f3WTr6YstG_GWd5I7WKglhVmC4dfUoPFJITDKyz9ZY5TT7ipg1VkWoAAoOqv0YXYx'
    }
});