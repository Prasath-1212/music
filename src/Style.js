import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: { flexGrow:1 },
  carddisplay: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  cardcontainer: {
    margin : '10px 100px 10px 100px'
  },
  model : {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: 'white', 
    padding: '20px', 
    minWidth: '300px' 
  },
  icon: {
    alignItems: "flex-end",
    padding: '10px 10px 10px 10px',
    margin : '10px 10px 10px 10px'
  },


}));