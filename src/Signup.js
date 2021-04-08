import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 165,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [baseLoanAmount, setBaseLoanAmount] = React.useState();
  const [amortizationTerm, setAmortizationTerm] = React.useState();
  const [occupancy, setOccupancy] = React.useState();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="drate"
                name="desiredRate"
                variant="outlined"
                required
                fullWidth
                id="desiredRate"
                label="Desired Rate"
                autoFocus
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Loan Purpose
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={baseLoanAmount}
                  onChange={(e) => setBaseLoanAmount(e.target.value)}
                >
                  <MenuItem value={"Purchase"}>Purchase</MenuItem>
                  <MenuItem value={"RefiRateTermLimitedCO"}>Refinance</MenuItem>
                  <MenuItem value={"RefiCashOut"}>Cash-Out</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="baseLoanAmount"
                label="Base Loan Amount"
                name="baseLoanAmount"
                autoComplete="bloanamount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="propertyValue"
                label="Property Value"
                name="propertyValue"
                autoComplete="pvalue"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Amortization Term
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={amortizationTerm}
                  onChange={(e) => setAmortizationTerm(e.target.value)}
                >
                  <MenuItem value={"ThirtyYears"}>Fifteen Years</MenuItem>
                  <MenuItem value={"FifteenYears"}>Thirty Years</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Amortization Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={baseLoanAmount}
                  onChange={(e) => setBaseLoanAmount(e.target.value)}
                >
                  <MenuItem value={"Fixed"}>Fixed</MenuItem>
                  <MenuItem value={"ARM"}>ARM</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Occupancy</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={occupancy}
                  onChange={(e) => setOccupancy(e.target.value)}
                >
                  <MenuItem value={"PrimaryResidence"}>
                    Primary Residence
                  </MenuItem>
                  <MenuItem value={"InvestmentProperty"}>
                    Investment Property
                  </MenuItem>
                  <MenuItem value={"SecondHome"}>Second Home</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
