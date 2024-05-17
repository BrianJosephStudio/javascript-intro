import { CSSProperties } from "react"

export const StatsPanel = () => {
    const container_styles:CSSProperties = {
        display: 'grid',
        placeContent: 'center',
        backgroundColor: "yellow",
        height:"100%",
        width: '100%',
        borderRadius: '0.6rem',
        maxWidth: '24rem',
        // margin: '1rem',
        gridColumn: '1/3'
    }
    return(
        <div style={container_styles}>
            Stats
        </div>
    )
}