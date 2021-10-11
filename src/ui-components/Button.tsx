import MButton, { ButtonProps } from "@mui/material/Button"
import React from "react"
import styled from "styled-components"

interface Props extends ButtonProps {
    className?: string
}
const Button = ({ className, ...rest }: Props) =>
    <MButton
        className={className}
        {...rest}
    />

export default styled(Button)`
    background-color: var(--blue);
    color: var(--white);
    min-width: 7rem;
    padding: .7rem;
    text-transform: none;

    &.Mui-disabled {
        color: var(--light-blue-color);
        background-color: var(--light-blue-bg);
    }
`