import { Button } from 'reactstrap';

const ControlMenu = (props) => {
    return (
        <div className="control-menu">
            <div className="status-box">
                Saved
            </div>
            <Button color="success">Save</Button>
        </div>
    )
}

export default ControlMenu;