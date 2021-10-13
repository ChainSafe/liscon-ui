
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress/CircularProgress"
import React from "react"
import styled from "styled-components"

interface Props extends CircularProgressProps {
    className?: string
}
const Loader = ({ className, ...rest }: Props) =>
    <CircularProgress
        className={className}
        {...rest}
    />

export default styled(Loader)`
    color: var(--blue);
`