import axios from 'axios'
console.log(axios);
const BASE_URL = import.meta.env.VITE_BASE_URL


export const getData = async (url) => {
    try {
        const res = await axios.get(BASE_URL + url)

        return res.data
    } catch(error) {
        alert('что то пошло не так перезагрузите страницу')
    }
}

export const postData = async (url, body) => {
    const res = await fetch(BASE_URL + url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res
}

export const removeData = async (url, id) => {
    const res = await axios.delete(`${BASE_URL}${url}/${id}`)

    return res
}

export const patchData = async (url, body) => {
    const res = await fetch(BASE_URL + url, {
        method: 'patch',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res
}


export const getSymbols = async () => {
    const res = await fetch(import.meta.env.VITE_FIXER_IO, {
        headers: {
            apikey: import.meta.env.VITE_FIXER_API_KEY
        }
    })

    const data = await res.json()
    
    return data
}