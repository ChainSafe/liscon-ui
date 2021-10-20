import React, { useCallback, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import useGetNFT from "../hooks/useGetNFT"
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
    const { isAlreadyMinted, isBeingMinted, isLoading, imageUrl } = useGetNFT(nft)
    const [address, setAddress] = useState("")
    const [isInvalidAddress, setIsInvalidAddress] = useState(false)
    const canMint = useMemo(() => !isLoading && !isAlreadyMinted && !isBeingMinted, [isAlreadyMinted, isBeingMinted, isLoading])
    const [nftAddress, setNftAddress] = useState("")

    const onVisitOpenSea = useCallback(() => {
        if (nft) {
            window.open(`${OPENSEA_BASE}${nft}`)
        }
    }, [nft])

    return (
        <div className={className}>
            <div className="textContainer">
                <div>
                    Congrats, your NFT is now minted
                </div>
                {
                    imageUrl && <div className="nftContainer">
                        <img src={imageUrl} />
                    </div>
                }
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .textContainer > div {
        max-width: 50%;
    }

    .nftContainer img { 
        width: 100%;
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
