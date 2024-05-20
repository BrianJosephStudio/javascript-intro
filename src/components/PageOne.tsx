import '../App.css'
import React, { useEffect, useRef, useState } from 'react';
import { CustomerForm } from './CustomerForm';
import { PerformancePanel } from './PerformancePanel';
import { PerformanceStatsContext } from '../util/context/Contexts';
import { PerformanceEvent, MeasurementInput } from '../types';

export const PageOne: React.FC = () => {
  const appUrl = import.meta.env.VITE_APP_URL
  const lightModeUrl = `${appUrl}/light-mode`

  const iframe = useRef<HTMLIFrameElement>(null)

  const [performanceEvents, setPerformanceEvents] = useState<PerformanceEvent[]>([])
  const [openPerformanceMark, setOpenPerformanceMark] = useState<null | PerformanceMark>(null)
  const [openPerformanceMarkName, setOpenPerformanceMarkName] = useState<null | string>(null)

  const startPerformanceMeasurement = () => {
    // console.log(openPerformanceMark)
    // console.log(openPerformanceMarkName)
    // if (openPerformanceMarkName) {
    //   console.error("There's a performance measurement already in place")
    //   return
    // }
    const markName = Date.now().toString()
    setOpenPerformanceMarkName(markName)
    const start = window.performance.mark(markName)
    setOpenPerformanceMark(start)
  }

  const closePerformanceMeasurement = () => {
    if (!openPerformanceMark || !openPerformanceMarkName) {
      console.error("Could not find an open measurement")
      return
    }
    const end = window.performance.mark(openPerformanceMarkName)
    createPerformanceLog(openPerformanceMark, end, MeasurementInput.A)
    setOpenPerformanceMark(null)
    setOpenPerformanceMarkName(null)
  }

  const createPerformanceLog = (start: PerformanceMark, end: PerformanceMark, measurementInput: MeasurementInput): void => {
    setPerformanceEvents([
      ...performanceEvents,
      {
        start,
        end,
        duration: end.startTime - start.startTime,
        measurementInput: measurementInput
      }
    ])
  }

  const addPerformanceListeners = (event: any) => {
    try {
      if (openPerformanceMark && openPerformanceMarkName) {
        closePerformanceMeasurement()
      }

      const iframe = event.currentTarget as HTMLIFrameElement

      const iframeContentDocument = iframe.contentDocument

      if (!iframeContentDocument) {
        console.log("contentDocument not available")
        return
      }

      const themeSwitch = iframeContentDocument.getElementById("themeSwitch")

      themeSwitch?.addEventListener("click", () => {
        startPerformanceMeasurement()
      })
    } catch (e) {
      console.log("catch block")
    }
  }

  useEffect(() => {
    if (performanceEvents.length === 0) return;

    const { duration } = performanceEvents[performanceEvents.length - 1];
    const formattedDuration = duration.toFixed(2);

    console.log(`This action took ${formattedDuration} milliseconds to complete`);
  }, [performanceEvents]);


  return (
    <PerformanceStatsContext.Provider value={{
      createPerformanceLog,
      performanceEvents
    }}>
      <PerformancePanel></PerformancePanel>
      <div className='wrapper'>
        <iframe onLoad={(event) => addPerformanceListeners(event)} ref={iframe} src={lightModeUrl}></iframe>
        <CustomerForm
          themeSwitch={true}
          validateInput={false}
          measurePerformance={true}
        />
      </div>
    </PerformanceStatsContext.Provider>
  );
};
