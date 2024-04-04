import Person from "@/components/person";
import { API_URL } from "../constants";
import styles from "../../styles/home.module.css"


export const metadata = {
  title: "World Billions",
}

async function getBillions() {
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function Home() {
  const billions = await getBillions();
  return (
    <div className={styles.container}>
      {billions.map((b:any) => (
        <Person
          key={b.id}
          id={b.id}
          squareImage={b.squareImage}
          name={b.name}
          netWorth={b.netWorth}
          industries={b.industries}
        />
      ))}
    </div>   
  )
}