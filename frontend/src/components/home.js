import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(3),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    margin: "auto",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  salesText: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Typography variant="h6" color="inherit" className={classes.salesText}>
          Sales Activity
        </Typography>
        <div>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}></div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    866
                  </Typography>
                  <Typography>Qty</Typography>
                  <Typography>To be packed</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    1
                  </Typography>
                  <Typography>Pkgs</Typography>
                  <Typography>To be shipped</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    35
                  </Typography>
                  <Typography>Pkgs</Typography>
                  <Typography>To be Delivered</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    1543
                  </Typography>
                  <Typography>Qty</Typography>
                  <Typography>To be invoiced</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quantity in hand
                    <Divider orientation="vertical" flexItem />
                    655
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
