import React from "react"
import styled from "styled-components"

interface Props {
    className?: string
}

const Home = ({ className }: Props) => {

    return (
        <div className={className}>
            <div className="textContainer">WELCOME!<br />Find cards with QR codes around Liscon to mint exclusive NFTs!</div>
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
`