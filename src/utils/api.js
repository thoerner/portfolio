const apiURL = import.meta.env.VITE_API_URL

export const getArticle = async (id) => {
    const response = await fetch(`${apiURL}/articles/${id}`)

    let data
    try {
        data = await response.json()
    } catch (err) {
        return false
    }
    return data
}

export const mintHippo = async () => {
    const response = await fetch(`${apiURL}/mint/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    let data
    try {
        data = await response.json()
    } catch (err) {
        return false
    }
    return data
}