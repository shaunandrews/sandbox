function Card({ children, className }) {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

function CardHeader(props) {
    return (
        <header className="card__header">
            <h3>{props.title}</h3>
            {props.optionsMenu && props.optionsMenu}
        </header>
    )
}