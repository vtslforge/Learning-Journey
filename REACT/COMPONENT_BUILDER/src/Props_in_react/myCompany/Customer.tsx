type cusprop = {
    name: string
    visit: number

}
const Customer = ({ name, visit }: cusprop) => {
    return (
        <div>
            <p>{name}</p>
            <p>{visit}</p>
        </div>
    )
}

export default Customer