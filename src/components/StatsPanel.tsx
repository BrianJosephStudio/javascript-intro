import { CSSProperties } from "react"
import { PerformanceMeasurement } from "../types"

export const StatsPanel = ({
    measurement
}: {
    measurement: PerformanceMeasurement | null
}) => {
    const container_styles: CSSProperties = {
        display: 'grid',
        placeContent: 'center',
        // backgroundColor: "yellow",
        height: "100%",
        width: '100%',
        maxWidth: '24rem',
        // margin: '1rem',
        gridColumn: '1/3',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 0',
        borderColor: 'hsl(0, 0% 90%)'
    }
    return (
        <>
            {measurement && (<div style={container_styles}>
                <h2>
                    Time difference: <span style={{ color: 'green' }}>{measurement.difference.toFixed(2)}</span> ms
                </h2>
                <h2>
                    Pure HTML+CSS was <span style={{ color: 'red' }}>{measurement.percentage.toFixed(0)}</span>% slower
                </h2>
            </div>)}

            {!measurement && (<div style={container_styles}>
                <h2>
                    Change the theme on both forms to get a performance comparison
                </h2>
            </div>)}
        </>
    )
}