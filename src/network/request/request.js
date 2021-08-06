import axios from 'axios'
export function request(config){
    
        let newVar=axios.create({
            baseURL:"https://cnodejs.org/api/v1",
            timeout:50000
        });
        return newVar(config);  
}