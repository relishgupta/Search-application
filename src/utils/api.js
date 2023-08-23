import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params={
    key:'AIzaSyAbKfHcJLOjLUMtYsZ5xCQAP1enp-ockx0',
    cx:'9001883ac17624e70'
}
export const fetchDataFromApi = async(payload) => {
        const {data}=await axios.get(BASE_URL,{
            params:{...params,...payload}
        });
        return data;
};
