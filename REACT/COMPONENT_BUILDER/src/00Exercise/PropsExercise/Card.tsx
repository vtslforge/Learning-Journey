type prop = {
    sname: string
    sid: string
}
const Card = ({ sname, sid }: prop) => {
    return (
        <div>
            <p>From card : {sname}</p>
            <p>From card : {sid}</p>

        </div>
    )
}

export default Card