import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import { Wrapper } from "../wrappers/TodoBottom"


const TodoBottom = (props) => {
    const {themeBoolean} = useContext(ThemeContext)

    return(
    <Wrapper themeBoolean = {themeBoolean} todoLength={props.todoLength}>
        <p><span>{props.todoLength}</span> items left</p>
        <p className="clear-completed-btn" onClick = {props.handleDeleteAll}>Clear Completed</p>
    </Wrapper>
    )
}

export default TodoBottom