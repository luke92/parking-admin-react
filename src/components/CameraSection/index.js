import React from 'react'
import styled from 'styled-components'

const Streaming = styled.img`
    width: 1280px;
    height: 720px;
    border: 0px;
`

const CameraSection = props => (
    <Streaming src={`http://${props.ip}:${props.port}/video`} />
)

export default CameraSection