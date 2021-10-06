export default function Spinner(props)
{
    if(props.type&&props.id)
        return(
            <center style={{display: "none"}} id={props.id}>
                <div className={"spinner-grow "+props.type} role="status">
                    <span className="sr-only"/>
                </div>
                <div className={"spinner-grow "+props.type}  role="status">
                    <span className="sr-only"/>
                </div>
                <div className={"spinner-grow "+props.type}  role="status">
                    <span className="sr-only"/>
                </div>
                <br/>
            </center>
        );
    else if(props.id)
        return(
            <center style={{display: "none"}} id={props.id}>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <br/>
            </center>
        );
    else
        return(
            <center>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"/>
                </div>
                <br/>
            </center>
        );
}