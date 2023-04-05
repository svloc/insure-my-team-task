import styles from './Button.module.css';

function Button(props){
    const{children,variant,...rest}=props;
    switch (variant) {
        case 'danger':
            return(<button className={`${styles.btn} ${styles.btn_danger}`} {...rest}>{children}</button>)

        default:
            return(<button className={`${styles.btn} ${styles.btn_black}`} {...rest}>{children}</button>);
    }  
}
export default Button;