import { CSSProperties } from "react"
import { MeasurementInput, PerformanceEvent } from "../types"

export const PerformanceMonitor = (
    {
        performanceEvent,
        monitorTitle
    }: {
        performanceEvent: PerformanceEvent | null
        monitorTitle: string
    }
) => {
    const container_styles: CSSProperties = {
        display: 'grid',
        // placeContent: 'center',
        // backgroundColor: "blue",
        // height:"12rem",
        // width: '16rem',
        height: '100%',
        borderRadius: '0.6rem',
        color: 'white',
        lineHeight: '0.2rem'
    }
    return (
        <div style={container_styles}>
            <h3>{monitorTitle}</h3>
            {
                !performanceEvent && <div>
                    <h3>
                        Nothing to report
                    </h3>
                </div>
            }
            {
                performanceEvent && <div>
                    <h3>
                        <span style={{
                            color: 'green'
                        }}
                        >{performanceEvent.duration.toFixed(2)}</span> milliseconds
                    </h3>
                </div>
            }
        </div>
    )
}