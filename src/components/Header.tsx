import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

interface Props {
    className?: string
}

const Header = ({ className }: Props) =>
    <div className={className}>
        <img
            className="logo"
            src={logo}
        />
        <div className="liscon">
            LISCON 2021
        </div>
    </div>

export default styled(Header)`
    .logo {
        margin: 3rem auto;
        display: block;
    }

    .liscon {
        padding: 1rem 1rem;
        border-color: var(--font-color);
        border-top: 1px solid;
        border-bottom: 1px solid;
    }
`