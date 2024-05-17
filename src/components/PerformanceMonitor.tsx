import { CSSProperties } from "react"

export const PerformanceMonitor = () => {
    const container_styles: CSSProperties = {
        display: 'grid',
        // placeContent: 'center',
        backgroundColor: "blue",
        // height:"12rem",
        width: '100%',
        height: '100%',
        borderRadius: '0.6rem',
        color: 'white'
    }
    return (
        <div style={container_styles}>

            <div>console</div>
            <div>stat</div>
        </div>
    )
}