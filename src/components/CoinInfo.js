import React from "react";
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import { CoinState } from "../CoinContext";
import axios from "axios";
import { createTheme, ThemeProvider, makeStyles, CircularProgress } from "@material-ui/core";
import { HistoricalChart } from "../api/api";
import { chartDays } from "./days";
import {Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js';
import SelectButton from "./Banner/SelectButton";
import { useNavigate } from "react-router-dom";

Chart.register (LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const useStyles = makeStyles((theme) => ({
    container: {
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
        },
    },

}));

const CoinInfo = ({coin}) => {
    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState(1);
    const [flag, setFlag] = useState(false);

    const {currency} = CoinState();

    const fetchHistoricalData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setFlag(true);
        setHistoricalData(data.prices);
    };

    // console.log("data", historicalData);

    useEffect(() => {
        fetchHistoricalData();
    }, [days]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });   

    const classes = useStyles();

    // const options ={
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         title: {
    //             display: true,
    //             text: 'Chart.js Line Chart',
    //         },
    //     },
    // };

    // const data ={{}
    //     labels: historicalData.map((coin) => {
    //         let date = new Date(coin[0]);
    //         let time = 
    //             date.getHours() > 12
    //             ? '${date.getHours() - 12}:${date.getMinutes()} PM'
    //             : '${date.getHours()}:${date.getMinutes()} AM';
    //         return days === 1 ? time : date.toLocaleDateString();
    
    //     datasets: [
    //     {
    //         data:historicalData.map((coin) => coin[1]),
    //         label: 'Price ( Past ${days} Days ) in ${currency}',
    //     },
    //     ],
    // }}

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={darkTheme}>
            Performance Chart across {days} days
            <div className={classes.container}>
                {!historicalData | flag===false ? (
                    <CircularProgress
                        style={{ color: "gold" }}
                        size={250}
                        thickness={1}
                    />
                ) : (
                    <>
                        <Line
                          data={{
                            labels: historicalData.map((coin) => {
                              let date = new Date(coin[0]);
                              let time =
                                date.getHours() > 12
                                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                  : `${date.getHours()}:${date.getMinutes()} AM`;
                              return days === 1 ? time : date.toLocaleDateString();
                            }),
                        
                            datasets: [
                              {
                                data: historicalData.map((coin) => coin[1]),
                                label: `Price ( Past ${days} Days ) in ${currency}`,
                                borderColor: "#EEBC1D",
                              },
                            ],
                          }}
                          options={{
                            elements: {
                              point: {
                                radius: 1,
                              },
                            },
                          }}
                        />
                        <div
                            style={{
                                display: "flex",
                                marginTop: 20,
                                justifyContent: "space-around",
                                width: "100%",
                            }}
                        >
                            {chartDays.map((day) => (
                                <SelectButton
                                    key={day.value}
                                    onClick={() => {setDays(day.value)
                                        setFlag(false);
                                    }}
                                    selected={day.value === days}
                                >
                                    {day.label}
                                </SelectButton>
                            ))}
                        </div>
                    </>
                )}
                <button
                    style={{
                        display: "flex",
                        marginTop: 20,
                        justifyContent: "space-around",
                        width: "100%",
                    }}
                    onClick={() => navigate(`/`)}
                    >
                    Back
                </button>
            </div>
        </ThemeProvider>
    );
};

export default CoinInfo;