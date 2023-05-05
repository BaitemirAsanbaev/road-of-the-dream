import axios from "axios";
import { api } from "./api";
const requests = {
        getReports() {
            axios.get(`${api}reviewы/`, )
            .then((res)=>{
            console.log(res.data);
        })
        },
        postReport(data, header){
            console.log(data);
            axios.post("http://192.168.0.64:8000/reviews/", data, {header})
        .then((res)=>{
            console.log("succes",   res.data);
        })
        }
}
export default requests

