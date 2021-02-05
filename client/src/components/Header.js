import '../css/header.css';

const Header =({teamA,teamB})=> {
    return (
        <div>   
            <nav className="navbar header">
                <div className="container-fluid">
                {teamA} vs {teamB}
                </div>
            </nav>
        </div>
    )
}
export default Header;