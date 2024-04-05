import Person from "@/components/person";
import { getBillions } from "../functions";
import styles from "../../styles/home.module.css"


export const metadata = {
  title: "Home",
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