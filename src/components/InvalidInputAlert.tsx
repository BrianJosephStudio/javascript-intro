import { useContext } from "react"
import { UserDetailsContext } from "../util/context/UserDetailsContext"

const defaultErrorMessage = "invalid"

export const InvalidInputAlert = ({
    visible = false,
    message = defaultErrorMessage,
}: {
    visible?: boolean,
    message?: string
}) => {
    //@ts-ignore
    const { theme } = useContext(UserDetailsContext)
    const styles = {
        backgroundColor: theme === 'light' ? 'hsl(0, 50%, 72%)' : 'rgb(193 79 79)',
        opacity: !!visible ? 1 : 0
        
    }

    return (
        <div id="invalidInput" data-invalid={visible} className="invalidAlert" style={styles}>
            {message}
        </div>
    )
}