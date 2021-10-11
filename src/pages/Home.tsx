import Button from "../ui-components/Button"
import React, { useCallback, useState } from "react"
import styled from "styled-components"
import Input from "../ui-components/TextInput"


interface Props {
    className?: string
}

const ethAddressRegex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

const Home = ({ className }: Props) => {
    const [address, setAddress] = useState("")
    const [isInvalidAddress, setIsInvalidAddress] = useState(false)

    const onClick = useCallback(() => {
        console.log("ok")
    }, [])

    const onInputValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const trimmedInput = event.target.value.trim()
        setAddress(trimmedInput)
        if (!ethAddressRegex.test(trimmedInput)) {
            setIsInvalidAddress(true)
        }
    }, [])

    return (<div className={className}>
        <div className="textContainer">Welcome</div>
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
            <Button
                onClick={onClick}
                disabled={isInvalidAddress}
            >
                Mint
            </Button>
        </div>
    </div>)
}

export default styled(Home)`
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
`