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
  return (
    <Link className={styles.card} onClick={onClick} prefetch href={`/person/${id}`}>
      <img className={styles.squareImage} src={squareImage} />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.infobox}>
        <h5 className={styles.netWorth}>{netWorth}</h5>
        <h5 className={styles.divider}> / </h5>
        <h5 className={styles.industries}>{industries}</h5>
      </div>
    </Link>
  )
}