import { Outlet, Link } from "react-router-dom";

const FormPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 my-3">
                    <Link to="/add">
                        <button className="btn btn-primary mx-3">Add Form</button>
                    </Link>
                    <Link to="/preview">
                        <button className="btn btn-info">Preview Form</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage;