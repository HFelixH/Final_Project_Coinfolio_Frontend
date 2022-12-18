import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Spinner from "./Spinner";

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./cryptobanner.jpg)",
        },

    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        CoinFolio
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get all the Infor regarding your favourtite Crypto Currerncy
                    </Typography>
                </div>
                <Spinner/>
            </Container>
        </div>
    );
}

export default Banner;