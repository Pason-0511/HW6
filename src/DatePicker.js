import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    width: 100
  }
}));

function TWDate(date) {
    const [year, month, day] = date.split('-')
    return `民國${year - 1911}年-${month}月-${day}號`
}

export default function DatePickers() {
  const classes = useStyles();
  const [Date, setdate] = useState("民國110年-05月-25號")

  return (
    <form className={classes.container} noValidate>
      <TextField value={Date}
        id="normal"
        label="grandpa store"
        className={classes.textField}
        />
      <TextField
        id="date"
        label=" "
        type="date"
        className={classes.textField2}
        onChange={event => {
            setdate(TWDate(event.target.value))
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}