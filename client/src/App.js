import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  Divider,
} from '@material-ui/core';

import {
  ArrowBack,
  InsertChartOutlined,
  Timeline,
} from "@material-ui/icons/";

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Grid container justify="space-evenly" alignItems="center">
        <Grid style={{ height: "70px" }} container item alignItems="center" spacing={2} xs={6} lg={4} >
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="ArrowBack">
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item>
            {props.teamA} v/s {props.teamB}
          </Grid>
        </Grid>
        <Grid style={{ height: "60px" }} container item justify='flex-end' spacing={2} alignItems="center" xs={6} lg={4}>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="Chart">
              <InsertChartOutlined />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="Timeline">
              <Timeline />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

const TeamScore = (props) => {
  return (
    <Grid item container xs={6} alignItems="center" justify="space-evenly" direction={props.direction}>
      <Grid item container direction="column" xs={6} alignItems="center">
        <Grid item>
          <Avatar style={{ backgroundColor: "#3f51d5" }}>{props.team[0]}</Avatar>
        </Grid>
        <Grid item>
          <Typography variant="button">
            {props.team}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={6} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            99/3
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            (12.3)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Score = (props) => {
  return (
    <Paper style={{ borderRadius: "30px" }} variant="outlined">
      <Grid style={{ padding: "30px " }} direction="column" container spacing={4}>
        <Grid container item justify="space-evenly" alignItems="center">
          <TeamScore direction="row" team={props.teamA} />

          <TeamScore direction="row-reverse" team={props.teamB} />
        </Grid>
        <Grid container item direction="column" alignItems="center" justify="center">
          <Grid items style={{ marginBottom: "10px" }}>
            India needs 300 runs to win
          </Grid>
          <Grid items container justify="space-around">
            <Grid items >
              CRR : 9.55
            </Grid>
            <Grid items >
              RRR : 5.65
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

const PlayerStat = (props) => {
  return (
    <Typography variant="body2">
      <Grid style={{ padding: "5px 0" }} container justify="space-evenly">
        <Grid item xs={4}>
          {props.stats.batsmen}
        </Grid>
        <Grid container item xs={5} justify="space-between">
          <Grid item container justify="center" xs={2} >
            {props.stats.runs}
          </Grid>
          <Grid item container justify="center" xs={2}>
            {props.stats.balls}
          </Grid>
          <Grid item container justify="center" xs={2}>
            {props.stats.fours}
          </Grid>
          <Grid item container justify="center" xs={2}>
            {props.stats.sixes}
          </Grid>
          <Grid item container justify="center" xs={2}>
            {props.stats.sr}
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  )
}

const App = () => {
  const teamA = "India";
  const teamB = "England";
  const stat = {
    batsmen:"Batsmen",
    runs:"R",
    balls:"B",
    fours:'4s',
    sixes:'6s',
    sr:'SR',
  };
  
  const stat3 = {
    batsmen:"Bowler",
    runs:"O",
    balls:"R",
    fours:'M',
    sixes:'W',
    sr:'ER',
  };

  const stat2 = {
    batsmen:"Virat Kohli",
    runs:"130",
    balls:"100",
    fours:'8',
    sixes:'3',
    sr:'135.35',
  };

  return (
    <div className="App">
      <Navbar teamA={teamA} teamB={teamB} />
      <Container maxWidth="md" style={{ marginTop: "10px" }}>
        <Score teamA={teamA} teamB={teamB} />

        <Paper style={{ marginTop: "10px", borderRadius: "30px" }} variant="outlined">
          <PlayerStat stats={stat} />
          <Divider />
          <PlayerStat stats={stat2} />
          <PlayerStat stats={stat2} />
          <PlayerStat stats={stat3} />
          <Divider/>
          <PlayerStat stats={stat2} />

        </Paper>
      </Container>
    </div>
  );
}

export default App;