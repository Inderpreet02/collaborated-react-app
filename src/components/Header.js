import "./Header.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

const Header =()=>{
    return(
        <div className="header">
            <div className="header__container">
                <img src="https://tanishq.co.in/wps/wcm/connect/tanishq/c5124844-8ad5-41af-99bd-1e561480f9fb/TanishqLogo-mobile.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-c5124844-8ad5-41af-99bd-1e561480f9fb-mC0fAsK "/>
                <h3>JEWELLERY</h3>
                <h3>GOLD</h3>
                <h3>DIAMOND</h3>
                <h3>ENGAGEMENT RINGS</h3>
                <h3>COLLECTIONS</h3>
                <h3>RIVAAH</h3>
                <h3>INSIDE TANISHQ</h3>
                <h3>MIA</h3>
                <LocationOnIcon/>
                <SearchIcon/>
            </div>
        </div>
    )

}

export default Header;