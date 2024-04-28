
export const WinCard = ({place, type,name, year,role, logo, animation}) => {

    return (
        <div className="card-trophy">
            <div className="card-trophy__header">
                <h3 className="card-trophy__title">{place}</h3>
            </div>
            <div className="card-trophy__image">
                <img src={logo} alt="trophy" width={80} height={80} />
            </div>
            <div className="card-trophy__body">
                <h3 className="card-trophy__title">{year}</h3>
                <p className="card-trophy__text">{type}</p>
                <p className="card-trophy__text">{name}</p>
                <p className="card-trophy__text">Role: {role}</p>
            </div>
        </div>
    )
}