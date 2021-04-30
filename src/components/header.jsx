import styles from "../Header.module.css"
export const Header = () => {

    return(
        <div className={styles.header_outer_div}>
            <div ><button>ABOUT US</button></div>
            <div ><button>FOR YOU</button></div>
            <div ><button>SERVICES</button></div>
            <div ><button>BLOG</button></div>
            <div ><button>VLOG</button></div>
            <div ><button>CONTACT</button></div>
        </div>
    )
}