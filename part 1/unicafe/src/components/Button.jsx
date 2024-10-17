const Button = ({ state, handle, text }) => {
    return <button onClick={() => handle(state + 1)}>{text}</button>
}
export default Button
