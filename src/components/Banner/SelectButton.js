import React from "react";
import { makeStyles } from "@mui/styles";

const SelectButton = ({ children, selected, onClick }) => {
    
//     const useStyles = makeStyles({
//     selectButton: {
//         border: "1px solid #fff",
//         borderRadius: 5,
//         padding: 10,
//         paddingLeft: 20,
//         paddingRight: 20,
//         fontFamily: "Montserrat",
//         cursor: "pointer",
//         backgroundColor: selected ? "#16171a" : "",
//         color: selected ? "#fff" : "",
//         fontWeight: selected ? 700 : 500,
//         "&:hover": {
//             backgroundColor: "#1f2125",
//             color: "#fff",
//         },
//         width: "22%",
//     },
// })

//     const classes = useStyles();

  return (
  <span
    // className={classes.selectButton}
    onClick={onClick}>
    {children}
  </span>
  );
}

export default SelectButton;