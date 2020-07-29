import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>({
    table: {
       margin: "200px 5px",
       maxWidth: "1400px"
        
      },
      checkoutButton:{
          float: "right",
          margin: "100px",
          marginRight: "300px"
      },
      link:{
        textDecoration: "none",
      }
  
    }));
