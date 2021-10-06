export default function Footer()
{
    return(
        <footer className="footer">
            <div className="container text-center">
                <small>Copyright &copy; <a href={process.env.REACT_APP_GITHUB} style={{color: "white"}}>Alexandru Carmici</a></small>
            </div>
        </footer>
    )
}