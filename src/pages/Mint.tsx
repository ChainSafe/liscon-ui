import React, { useCallback, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import useGetNFT from "../hooks/useGetNFT"
import Button from "../ui-components/Button"
import Loader from "../ui-components/Loader"
import Input from "../ui-components/TextInput"


interface Props {
    className?: string
}

const OPENSEA_BASE = "https://opensea.io/"
const ethAddressRegex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

const Mint = ({ className }: Props) => {
    const { id = "" } = useParams<{ id: string }>()
    const { isAlreadyMinted, isBeingMinted, isLoading, mint } = useGetNFT(id)
    const [address, setAddress] = useState("")
    const [isInvalidAddress, setIsInvalidAddress] = useState(false)
    const canMint = useMemo(() => !isLoading && !isAlreadyMinted && !isBeingMinted, [isAlreadyMinted, isBeingMinted, isLoading])

    const onMint = useCallback(() => {
        if (!address) {
            console.error("no address")
            return
        }

        mint(address)
            .then((nftAddress) => nftAddress && window.open(nftAddress))
            .catch(console.error)
    }, [address, mint])

    const onVisitOpenSea = useCallback(() => {
        if (address) {
            window.open(`${OPENSEA_BASE}${address}`)
        }
    }, [address])

    const onInputValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const trimmedInput = event.target.value.trim()
        setAddress(trimmedInput)
        if (!ethAddressRegex.test(trimmedInput)) {
            setIsInvalidAddress(true)
        }
    }, [])

    return (
        <div className={className}>
            <div className="textContainer">
                {isLoading &&
                    (
                        <div className="loader">
                            <Loader />
                            Loading...
                        </div>
                    )
                }
                {!isLoading && !isAlreadyMinted && isBeingMinted && (
                    <>
                        <div className="loader">
                            <Loader />
                        </div>
                        <div>
                            We&apos; re minting this NFT right now.<br />
                            Once done, it&apos;ll be visible on any Polygon NFT explorer such as OpenSea.
                        </div>
                    </>
                )}
                {!isLoading && isAlreadyMinted && (
                    <div>
                        Sorry, this NFT is already minted :(
                    </div>
                )}
                {canMint && (
                    <div>
                        Yay, you&apos;re the first to find this card, you can mint the NFT by typing in your ETH address.
                    </div>
                )}
            </div>
            {canMint && (
                <>
                    <div className="lineContainer">
                        <span className="label">Wallet</span>
                        <Input
                            onChange={onInputValue}
                            placeholder="0x123..456"
                            value={address}
                            error={isInvalidAddress}
                        />
                    </div>
                    <div className="buttonContainer">
                        {isBeingMinted && (
                            <Button
                                onClick={onVisitOpenSea}
                                disabled={isInvalidAddress}
                            >
                                Visit OpenSea
                            </Button>
                        )}
                        {canMint && (
                            <Button
                                onClick={onMint}
                                disabled={isInvalidAddress}
                            >
                                Mint
                            </Button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default styled(Mint)`
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
