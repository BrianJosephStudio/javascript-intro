import { CSSProperties } from "react"
import { StatsPanel } from "./StatsPanel"
import { PerformanceMonitor } from "./PerformanceMonitor"

export const PerformancePanel = () => {
    const container_styles:CSSProperties = {
        display: 'grid',
        placeContent: 'center',
        backgroundColor: "hsl(0, 0%, 90%)",
        height:"12rem",
        width: '24rem',
        borderRadius: '0.6rem',
        // maxWidth: '24rem',
        gridTemplateColumns: 'repeat(2, auto-fill)',
        gridTemplateRows: 'repeat(2, auto-fill)',
        gridGap:'0.8rem',
        alignContent: 'center',
        justifyContent: 'center'
    }
    return(
        <div style={container_styles}>
            <StatsPanel></StatsPanel>
            <PerformanceMonitor></PerformanceMonitor>
            <PerformanceMonitor></PerformanceMonitor>
        </div>
    )
}