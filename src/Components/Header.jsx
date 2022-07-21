export default function Header(){
    return(
        <header>
            <img src="../src/images/profile.png"/>
            <h2>Tom Hang</h2>
            <h4>Junior Fullstack Developer</h4>
            <a href="https://www.linkedin.com/in/tom-bao-hang">linkedin.com/in/tom-bao-hang</a>
            <section className="header-buttons">
                {/* <form className="header-mail" action="mailto:tbhang31@gmail.com" target="_blank">
                    <input type="submit" value="E-mail"/>
                </form>
                <form className="header-git" action="https://www.github.com/tbhang31" target="_blank">
                    <input type="submit" value="GitHub"/>
                </form> */}
                <a className="header-button" href="mailto:tbhang31@gmail.com" target="_blank">E-mail</a>
                <a className="header-button" href="https://www.github.com/tbhang31" target="_blank">GitHub</a>
            </section>
        </header>
    )
}