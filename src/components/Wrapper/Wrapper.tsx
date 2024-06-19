import classes from "./Wrapper.module.scss"

const Wrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <main className={classes.wrapper}>
            {children}
        </main>
    )
}

export default Wrapper