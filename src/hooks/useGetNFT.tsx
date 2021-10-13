import axios from "axios"
import { useState, useEffect, useMemo } from "react"

const API_URL = "https://retoolapi.dev/8dpC4g/gopher_test"

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
    const [apiAnswer, setApiAnswer] = useState<ApiAnswer[] | undefined>()
    const [isLoading, setIsLoading] = useState(false)
    const isAlreadyMinted = useMemo(() => !!apiAnswer?.[0]?.is_minted, [apiAnswer])
    const isBeingMinted = useMemo(() => !!apiAnswer?.[0]?.is_being_minted, [apiAnswer])

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${API_URL}?qr_id=${id}`)
            .then(({ data }) => {
                setApiAnswer(data)
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    return { isLoading, isAlreadyMinted, isBeingMinted }
}