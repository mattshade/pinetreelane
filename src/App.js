import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: 900,
    fontSize: '1.2em',
  },
  textfield: {
    background: 'rgba(255, 255, 255, 0.80);',
    borderRadius: '4px',
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className="App" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5, bold, color:green">
          Would you and your family like to join for a block party located in the cul-de-sac at the end of Pinetree Lane for $50 per family?
        </Typography>
        <br />
        <Typography component="h3" variant="h6">
          If yes please fill out the form below so we can determine if there is enough interest. <br /><strong>Thank you!</strong>
        </Typography>
        <br />
        <form name="interested" method="post">
        <input type="hidden" name="form-name" value="interested" />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.textfield}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                required
                fullWidth
                id="people"
                label="Guests"
                type="number"
                name="numGuests"
                
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            I'm interested!
          </Button>
        </form>
        <input type="hidden" name="form-name" value="interested" />
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}