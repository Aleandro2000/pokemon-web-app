export default function ResultTable(props)
{
    return(
        <>
            {
                !props.hasResult ? (
                    <div className="container" id="result">
                        <div className="row" id="result">
                            {
                                props.result.slice(0,4).map((item,index)=>{
                                    return(
                                        <div className="col" key={index}>
                                            <div className="container" id="result">
                                                <div className="card text-card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <br/>
                        <div className="row">
                            {
                                props.result.slice(4,8).map((item,index)=>{
                                    return(
                                        <div className="col" key={index}>
                                            <div className="container" id="result">
                                                <div className="card text-card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <div className="container" id="result">
                        <div className="row" id="result">
                            {
                                props.result.slice(props.pageIndex*4,(props.pageIndex+1)*4).map((item,index)=>{
                                    return(
                                        <div className="col" key={index}>
                                            <div className="container" id="result">
                                                <div className="card text-card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <br/>
                        <div className="row">
                            {
                                props.result.slice((props.pageIndex+1)*4,(props.pageIndex+2)*4).map((item,index)=>{
                                    return(
                                        <div className="col" key={index}>
                                            <div className="container" id="result">
                                                <div className="card text-card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}