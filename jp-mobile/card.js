function Card({ children, className, title, optionsMenu }) {
    return (
        <div
            className={`card ${className}`}
            onClick={() => { console.log('Card clicked') }}
        >
            {optionsMenu &&
                <OptionsMenu
                    items={optionsMenu}
                    className="card__options-menu"
                />
            }

            {title &&
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
            }

            <div className="card__content">
                {children}
            </div>
        </div>
    )
}