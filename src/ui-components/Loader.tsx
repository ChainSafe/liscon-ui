
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress/CircularProgress"
import React from "react"
import styled from "styled-components"

interface Props extends CircularProgressProps {
    className?: string
    color?: CircularProgressProps["color"]
}

const Loader = ({ className, color, ...rest }: Props) =>
    <CircularProgress
        className={className}
        color={color}
        {...rest}
    />

export default styled(Loader) <{ color?: CircularProgressProps["color"] }>`
    color: ${p => (p.color ? "undefined" : "var(--blue)")};
`