import { CSSProperties, useContext, useEffect, useState } from "react"
import { StatsPanel } from "./StatsPanel"
import { PerformanceMonitor } from "./PerformanceMonitor"
import { PerformanceEvent, PerformanceMeasurement, MeasurementInput } from "../types"
import { PerformanceStatsContext } from "../util/context/Contexts"

export const PerformancePanel = () => {
    const container_styles: CSSProperties = {
        display: 'grid',
        placeContent: 'center',
        backgroundColor: "hsl(0, 0%, 96%)",
        height: "12rem",
        // width: '32rem',
        borderRadius: '0.6rem',
        // maxWidth: '24rem',
        gridTemplateColumns: 'repeat(2, 18rem)',
        gridTemplateRows: 'repeat(2, auto)',
        WebkitAlignContent: 'space-around',
        gridGap: '0.8rem',
        // alignContent: 'center',
        // justifyContent: 'center',
        padding: '1rem 0',
        placeItems: 'center',
        alignItems: 'center'
    }

    //@ts-ignore
    const { performanceEvents } = useContext(PerformanceStatsContext)

    const [inputA, setInputA] = useState<PerformanceEvent | null>(null)
    const [inputB, setInputB] = useState<PerformanceEvent | null>(null)

    const [currentMeasurement, setCurrentMeasurement] = useState<PerformanceMeasurement | null>(null)

    // const [reverseInput, setReverseInput] = useState<boolean>(false)


    const runMeasurement = (A: PerformanceEvent, B: PerformanceEvent): PerformanceMeasurement => {
        const difference = A.duration - B.duration
        const percentage = ((difference / B.duration) * 100)

        return {
            difference,
            percentage
        }
    }

    // const getFasterInput = () => {
    //     if (!inputA || !inputB) { return }

    //     if (inputA?.duration < inputB.duration) {
    //         setReverseInput(true)
    //     }
    // }

    useEffect(() => {
        console.log("entra")
        const inputAArray = performanceEvents.filter((performanceEvent: PerformanceEvent) => {
            return performanceEvent.measurementInput === MeasurementInput.A
        })
        const inputBArray = performanceEvents.filter((performanceEvent: PerformanceEvent) => {
            return performanceEvent.measurementInput === MeasurementInput.B
        })
        console.log(inputAArray)
        console.log(inputBArray)

        setInputA(inputAArray.pop())
        setInputB(inputBArray.pop())
    }, [performanceEvents])

    useEffect(() => {
        if(!inputA || !inputB) { return }
        const measurement = runMeasurement(inputA, inputB)
        setCurrentMeasurement(measurement)
    }, [inputA, inputB])
    return (
        <div style={container_styles}>
            <StatsPanel measurement={currentMeasurement} ></StatsPanel>
            <PerformanceMonitor
            performanceEvent={inputA}
            monitorTitle="No Javascript"
            ></PerformanceMonitor>
            <PerformanceMonitor
            performanceEvent={inputB}
            monitorTitle="Javascript"
            ></PerformanceMonitor>
        </div>
    )
}