import Teamscore from './Teamscore';

const Scoreboard = () =>{
    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <Teamscore />
                </div>
                <div className="col">
                    <Teamscore/>
                </div>
            </div>
        </div>
    )
}
export default Scoreboard;