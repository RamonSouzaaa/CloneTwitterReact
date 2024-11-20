import styles from './TextInput.module.css'

function TextInput (props) {
    return (
        <textarea 
            className={styles.input}
            {...props}
        >
        </textarea>
    )
}

export default TextInput;