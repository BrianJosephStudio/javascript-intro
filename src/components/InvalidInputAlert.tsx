const defaultErrorMessage = "invalid"

export const InvalidInputAlert = ({
    visible = false,
    message = defaultErrorMessage,
}: {
    visible?: boolean,
    message?: string
}) => {
    return (
        <div id="invalidInput" data-invalid={visible} className="invalidAlert" style={{
            opacity: !!visible ? 1 : 0
        }}>
            {message}
        </div>
    )
}