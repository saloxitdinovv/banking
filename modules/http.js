const BASE_URL = "http://localhost:7000"


export const getData = async (url) => {
    const res = await fetch(BASE_URL + url)

    const data = await res.json()

    return data
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
    const res = await fetch(`${BASE_URL}${url}/${id}`, {
        method: 'delete'
    })

    return res
}

export const patchData = async () => {
    const res = await fetch(BASE_URL + url, {
        method: 'patch',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res
}