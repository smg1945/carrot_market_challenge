"use client";

import Link from "next/link"
import styles from "../styles/person.module.css"
import { useRouter } from "next/navigation"


interface PersonProps {
  id: number
  squareImage: string
  name: string
  netWorth: string
  industries: string
}

export default function Person({ id, squareImage, name, netWorth, industries }: PersonProps) {
  const router = useRouter()
  const onClick = () => {
    router.push(`/person/${id}`)
  }
  const formattedNetWorth = `${Math.floor(parseFloat(netWorth) / 1000)} Billion`
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.squareImage} src={squareImage}/>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.infobox}>
        <span className={styles.netWorth}>{formattedNetWorth} </span>
        <span className={styles.divider}>/</span>
        <span className={styles.industries}>{industries}</span>
      </div>
    <Link prefetch href={`/person/${id}`}></Link>
    </div>
  )
}