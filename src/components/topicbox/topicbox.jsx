import styles from "./topicbox.module.css"
import topic2 from "./topic2.jpg"

export default function TopicBox(){
    return <>
        <div className={styles.topic}>
            <img src={topic2} alt="Topic Image" />
            <p className={styles.title}>Title of the Topic</p>
            <p className={styles.description}>This is a very short description. can be shorter</p>
        </div>
    </>
}