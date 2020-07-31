import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      '& .MuiTextField-root': {
        marginTop: '200px',
        margin: '20px',
        width: '25ch',
      },
    },

    textfield:{
            display: 'block',
            maxWidth: '300px',
            marginLeft: '100px',
            marginTop:'10px',
    },
    firstfield:{
      
      display: 'block',
      maxWidth: '300px',
      marginLeft: '100px'
    },
    button: {
      margin: "5px 5px",
      float: "right"
      
    },
    box:{
          marginTop:'100px',
          border:"1px solid",
          maxWidth: '700px',
          padding: "60px",
          boxShadow: "5px 10px #888888",
    },
    link:{
      textDecoration: "none",
    },
  }),
);