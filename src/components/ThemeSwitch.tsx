import { useState, useEffect } from "react";

export function ThemeSwitch({ theme }: { theme: any }) {
    const [backGrounColor, setBackgroundColor] = useState("")
    const [margin, setMargin] = useState("0")

    useEffect(() => {
        console.log(theme)
        if (theme === "light") {
            setBackgroundColor("#c3c3c3")
            setMargin('0')
        } else if (theme === 'dark') {
            setBackgroundColor("white")
            setMargin('35%')
        }
    }, [theme])

    return (
        <div className="themeSwitch" style={{
            backgroundColor: backGrounColor
        }}>
            <div className="circle" style={{
                marginLeft: margin
            }}></div>
        </div>
    )
}