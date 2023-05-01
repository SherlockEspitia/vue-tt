import axios from 'axios'

const authApi = axios({
    method:'post',
    url:'https://front.opperdev.com/api/login',
    headers:{
        'Accept': 'application/json'
    }
    
})

export default authApi