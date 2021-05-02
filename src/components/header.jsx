import styles from "../Header.module.css"
export const Header = () => {

    return(
        <div className={styles.header_outer_div}>
            <button>ABOUT US</button>
            <button>FOR YOU</button>
            <button>SERVICES</button>
            <button>BLOG</button>
            <button>VLOG</button>
            <button>CONTACT</button>
        </div>
    )
}