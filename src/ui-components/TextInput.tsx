import MInput, { InputProps } from "@mui/material/Input"
import React from "react"
import styled from "styled-components"

interface Props extends InputProps {
    className?: string
}
const TextInput = ({ className, ...rest }: Props) =>
    <MInput
        className={className}
        {...rest}
    />

export default styled(TextInput)`
    width: 100%;
    border-radius: 0.5rem;
    background-color: var(--white);
    /* color: var(--white); */

    input { 
        padding: 0.5rem;
    }
`