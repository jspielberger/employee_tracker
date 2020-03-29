import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25"


export default function()  {
        return axios.get(BASEURL)
}
        