import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({ todoDetails, openDialog, onClose }) {
    return (
        <Fragment>
            <Dialog open={openDialog} onClose={onClose}>
                <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default TodoDetails;
