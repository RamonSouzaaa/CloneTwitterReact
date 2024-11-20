import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Tweet.module.css'

function Tweet (props){
    const publishedToNow = formatDistanceToNow(props.children.date, {
        locale: ptBR,
        addSuffix: true
    }

    );
    return (
        <div className={styles.tweetContainer}>
            <img 
                src={props.children.user.avatar_url} 
                alt="Foto de perfil" 
                title="Foto de perfil" 
                className={styles.avatar}
            />
            <div className={styles.user}>
                <span className={styles.userName}>{props.children.user.name}</span>
                <span className={styles.userUserName}>{props.children.user.username}</span>
                <span className={styles.date}>{publishedToNow}</span>
            </div>
            <span className={styles.tweetText}>
                {props.children.text}
            </span>
        </div>
    )
}

export default Tweet;