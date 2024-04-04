import styles from "../styles/person-info.module.css"
import { API_URL } from "../app/constants"


export async function getPerson(id: string) {
    const response = await fetch(`${API_URL}/person/${id}`)
    return response.json()
}

export default async function PersonInfo({id}:{id:string}) {
    const person = await getPerson(id)
    const formattedNetWorth = `${Math.floor(parseFloat(person.netWorth) / 1000)} Billion`
    return (
        <div className={styles.container}>
            <img
                src={person.squareImage}
                className={styles.squareImage}
            />
            <div className={styles.info}>
                <h1 className={styles.name}>{person.name}</h1>
                <span className={styles.netWorth}>Networth: {formattedNetWorth}</span>
                <span className={styles.country}>Country: {person.country}</span>
                <span className={styles.industry}>Industry: {person.industries}</span>
                <p className={styles.bio}>{person.bio}</p>
            </div>
        </div>
    )
}