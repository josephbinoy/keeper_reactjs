import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function Header() {

  const iconStyle={
    color:"white",
    rotate:"180deg",
    fontSize:"2rem",
    verticalAlign:"text-bottom",
    marginRight:"10px"
  }
  return (
    <header>
    <WbIncandescentIcon style={iconStyle} />
      <h1 style={{display:"inline"}}>Keeper</h1>
    </header>
  );
}

export default Header;
