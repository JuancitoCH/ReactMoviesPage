import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp'

export default function LogOut () {
    
    return(
        <div className="logout">
            <IconButton color="white" onClick={this.logout}>
                <ExitToApp></ExitToApp>
            </IconButton>
        </div>
    )
}