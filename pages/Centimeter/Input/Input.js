import styles from './Input.module.css';

function Input(props) {
    const { title,...rest } = props;
    return (
        <>
            {title && (<p>{title}</p>)}
            <input className={styles.form_input} {...rest} />
        </>
    )
}

export default Input;