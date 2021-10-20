import axios from "axios"
import { useState, useEffect, useMemo, useCallback } from "react"

const API_URL = "https://screams-yn559.ondigitalocean.app"

interface ApiAnswer {
    id: string
    qr_id: string
    token_id: string
    ipfs_link: string
    is_minted: boolean
    owner_address: string
    is_being_minted: string
}

export default (id: string) => {
    const [apiGETAnswer, setApiGETAnswer] = useState<ApiAnswer[] | undefined>()
    const [isLoading, setIsLoading] = useState(false)
    const isAlreadyMinted = useMemo(() => !!apiGETAnswer?.[0]?.is_minted, [apiGETAnswer])
    const isBeingMinted = useMemo(() => !!apiGETAnswer?.[0]?.is_being_minted, [apiGETAnswer])

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${API_URL}/${id}`)
            .then(({ data }) => {
                setApiGETAnswer(data)
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    const mint = useCallback((address: string) => {
        return axios.post<ApiAnswer>(`${API_URL}/mint/${id}/${address}`)
            .then(async ({ data }) => {
                //FORMAT: ipfs://Qmewrfv4zNYgxdToVLAjMYS74phVAJQMv7GNwHBjCM22vD/3013.json
                let ipfs_url = "https://ipfs.io/ipfs/" + data.ipfs_link.slice(7)
                console.log(ipfs_url)
                let metadata
                try {
                    let res = await axios.get(ipfs_url)
                    metadata = res.data

                } catch (err) {
                    console.warn("Error: " + err)
                }

                let metadata_image = "https://ipfs.io/ipfs/" + metadata.image.slice(7)
                console.log(metadata_image)
                return metadata_image;
            })
            .catch(console.error)
    }, [id])

    return { isLoading, isAlreadyMinted, isBeingMinted, mint }
}