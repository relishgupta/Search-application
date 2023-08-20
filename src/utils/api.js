import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params={
    key:'AIzaSyBTpwb3tOITd8imiAVHCcsxpAsQPCV80Po',
    cx:'e398426d7aaf6442e'
}
export const fetchDataFromApi = async(payload) => {
        const {data}=await axios.get(BASE_URL,{
            params:{...params,...payload}
        });
        return data;
};
