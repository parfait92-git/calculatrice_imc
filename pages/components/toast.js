const Toast = ({color, content, title}) => {
    return (
        <div className ="flex flex-col bg-gray-50">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <h4 className={color}> {title} </h4>
                        <p className={color}> {content} </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Toast; 