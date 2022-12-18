import { AppBar, Container, createTheme, ThemeProvider, Toolbar, Typography, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { CoinState } from "../CoinContext";
import * as user from "../api/user";

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}));


const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    },
});

function Header() {
    const classes = useStyles();
    const {currency, setCurrency} = CoinState();

    const navigate = useNavigate();



    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography 
                    onClick={() => navigate('/')}
                    className={classes.title}>
                        CoinFolio
                    </Typography>

                    <Typography 
                    onClick={() => navigate('/')}
                    className={classes.title}>
                        Coin Market
                    </Typography>

                    <Typography 
                    onClick={() => navigate('/trade')}
                    className={classes.title}>
                        Trades
                    </Typography>

                    <Typography 
                    onClick={() => navigate('/portfolio')}
                    className={classes.title}>
                        Portfolio
                    </Typography>

                    <div>
                        {user ? (
                            <>
                            <Typography
                            onClick={() => navigate('/profile')}
                            className={classes.title}>
                                Profile
                            </Typography>

                            <Typography
                            onClick={() => navigate('/login')}
                            className={classes.title}>
                                Logout
                            </Typography>
                            </>
                        ) : (
                            <>
                            <Typography
                            onClick={() => navigate('/login')}
                            className={classes.title}>
                                Login
                            </Typography>

                            <Typography
                            onClick={() => navigate('/signup')}
                            className={classes.title}>
                                Signup
                            </Typography>
                            </>
                        )}

                    </div>

                    <Select
                        variant="outlined"
                        style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        >
                        <MenuItem value={"AUD"}>AUD</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    );
}

export default Header;