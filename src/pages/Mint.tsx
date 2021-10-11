import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


interface Props {
    className?: string
}

const Check = ({ className }: Props) => {
    const { id = "" } = useParams()

    return (<div className={className}>
        <h1>Mint</h1>
    </div>)
}
export default styled(Check)`
    h1 {
        margin-left: 1rem
    }
`