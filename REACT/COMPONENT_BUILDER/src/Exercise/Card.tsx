type prop = {
    sname: string
    sid: string
}
const Card = ({ sname, sid }: prop) => {
    return (
        <div>
            <p>student card exercise of prop</p>
            <p>{sname}</p>
            <p>{sid}</p>

        </div>
    )
}

export default Card