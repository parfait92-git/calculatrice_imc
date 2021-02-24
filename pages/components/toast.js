const Toast = ({color, content, title}) => {
    return (
        <div className ="toast">
            <h4 className={color}> {title} </h4>
            <p className={color}> {content} </p>
        </div>
    )
}

export default Toast; 