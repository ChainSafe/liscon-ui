import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
// import useGetNFT from "../hooks/useGetNFT"
import Button from "../ui-components/Button"
// import Loader from "../ui-components/Loader"
// import Input from "../ui-components/TextInput"


interface Props {
    className?: string
}

const OPENSEA_BASE = "https://opensea.io/"
// const ethAddressRegex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

const View = ({ className }: Props) => {
    const { nft = "" } = useParams<{ nft: string }>()
    // const { isAlreadyMinted, isBeingMinted, isLoading, mint } = useGetNFT(id)
    // const [address, setAddress] = useState("")
    // const [isInvalidAddress, setIsInvalidAddress] = useState(false)
    // const canMint = useMemo(() => !isLoading && !isAlreadyMinted && !isBeingMinted, [isAlreadyMinted, isBeingMinted, isLoading])
    // const [nftAddress, setNftAddress] = useState("")

    // const onMint = useCallback(() => {
    //     if (!address) {
    //         console.error("no address")
    //         return
    //     }

    //     mint(address)
    //         .then((nftAddress) => nftAddress && window.open(nftAddress))
    //         .catch(console.error)
    // }, [address, mint])

    const onVisitOpenSea = useCallback(() => {
        if (nft) {
            window.open(`${OPENSEA_BASE}${nft}`)
        }
    }, [nft])

    // const onInputValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    //     const trimmedInput = event.target.value.trim()
    //     setAddress(trimmedInput)
    //     if (!ethAddressRegex.test(trimmedInput)) {
    //         setIsInvalidAddress(true)
    //     }
    // }, [])

    return (
        <div className={className}>
            <div className="textContainer">
                <div>
                    Congrats, your NFT is now minted
                </div>
            </div>
            <div className="buttonContainer">
                <Button
                    onClick={onVisitOpenSea}
                >
                    View on OpenSea
                </Button>
            </div>
        </div>
    )
}

export default styled(View)`
    .textContainer {
        font-size: var(--fz-xxl);
        margin: 2rem 2rem;
        min-height: 30vh;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }

    .lineContainer {
        padding: 3rem 2rem;
        border-color: var(--font-color);
        border-top: 1px solid;
        border-bottom: 1px solid;
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .loader {
        text-align: center;
    }
`
