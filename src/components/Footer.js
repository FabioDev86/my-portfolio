import { useMediaQuery } from "react-responsive"

export default function Footer(){
    const isMobile = useMediaQuery({ maxWidth: 500 })
    return(
        <footer>
            <img src="fabio_logo.png"/>
            <a>Linkdn</a>
            <a href="https://github.com/FabioDev86">GitHub</a>
            { isMobile ? null : <a>fabio.bauleo.developer@gmail.com</a>}
        </footer>
    );
}