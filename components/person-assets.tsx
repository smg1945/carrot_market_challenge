import styles from "../styles/person-assets.module.css"
import { getPerson } from "../app/functions"


export default async function PersonAssets({id}:{id:string}) {
  const person = await getPerson(id)
  const assets = person.financialAssets

  if (!assets || assets.length === 0) {
    return (
      <div className={styles.assets}>
        <h1>Financial Assets</h1>
        <p>No financial assets found.</p>
      </div>
    )
  }

  return (
    <div className={styles.assets}>
      <h1>Financial Assets</h1>
      <div className={styles.assets_list}>
        {assets.map((asset:any) => (
          <div key={asset.exchange} className={styles.asset_box}>
            {asset.ticker ? (
              <span className={styles.ticker}>Ticker: {asset.ticker}</span>
            ) : (
              <div className={styles.empty}></div>
            )}
            <span className={styles.numberOfShares}>Shares: {asset.numberOfShares.toLocaleString()}</span>
            {asset.exerciseOptionPrice ? (
              <span className={styles.exercise}>Excersie Price: ${asset.exerciseOptionPrice}</span>
            ) : (
              <div className={styles.empty}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}