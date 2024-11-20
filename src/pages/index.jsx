import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import styles from './index.module.css'
import useIndex from '../hooks/useIndex.page'

function Index() {
    const {
        text,
        tweetList,
        tweet,
        LIMIT,
        setText,
        setTweetList
    } = useIndex()

    return (
        <>
            <h1>Clone Twitter</h1>
            <div className={styles.tweetHeader}>
                <div className={styles.tweetUser}>
                    <img 
                        src={'https://github.com/RamonSouzaaa.png'} 
                        alt="Foto de perfil" 
                        title="Foto de perfil" 
                        className={styles.avatar}
                    />
                    <TextInput
                        placeholder={'O que está acontencendo?'} 
                        maxLength={LIMIT} 
                        rows={4} 
                        cols={50}
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    />
                </div>
                <div className={styles.tweetButton}>
                    <span>{text.length} / {LIMIT}</span>
                    <button 
                        disabled={text.length == 0}
                        onClick={() => {
                        setTweetList([...tweetList, {
                            id: new Date().getTime(),
                            ...tweet
                        }]);
                        setText('');
                    }}>
                        Tweetar
                    </button>
                </div>
            </div>
            <ul className={styles.tweetList}>
                {
                    tweetList.map(tweet => {
                        return (
                            <li 
                                key={tweet.id}
                                className={styles.tweetListItem}
                            >
                                <Tweet children={tweet} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Index;