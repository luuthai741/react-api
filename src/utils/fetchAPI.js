import axios from "axios";
import * as Config from '../redux/constaints/Config'

export default function fetchAPI(method = "GET", url, data) {
    return (
        axios({
            method: method,
            url: `${Config.BASE_URL}/${url}`,
            data: data
        }).catch(err => console.log(err))
    )
}