import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton , Toolbar} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll} from 'react-scroll' 


const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
    },
    appBar:{
        background:'none',
        fontFamily:'Nunito',
    },
    icon:{
        color:"#fff",
        fontSize:"2rem"
    },
    appbarTittle:{
        flexGrow:"1"
    },
    appbarWrapper:{
     width:'80%',
     margin:'0 auto'
    },
    span:{
      color:"#3fd125"  
    },
    title:{
        color:"#FFF",
        fontSize:"4.0rem",
        fontFamily:"Nunito"
    },
    container:{
        textAlign:"center"
    },
    goDown:{
        color:"#3fd125",
        fontSize:"4Rem"
    }

}));



export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false); 
    useEffect(()=> {
        setChecked(true)
    },[])
    return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTittle}>My<span className={classes.span}>Island.</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse 
            in ={checked}
            {...(checked ? {timeout: 1500} : {})}
            collapsedHeight={50}
        >
        <div className={classes.container}>
            <h1 className={classes.title}>
                Welcome to <br/> My <span className={classes.span}>Island.</span>
            </h1>
            <Scroll to ="place-to-visit"  smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>

        </div>
        </Collapse>
    </div>
    )
}