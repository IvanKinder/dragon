import React, {FC, PropsWithChildren, useEffect} from 'react'
import {Backdrop, Box, CircularProgress} from "@mui/material";


const Loader = ({loading}: any) => {
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        if (open) {
            setOpen(loading);
        }
    }, [loading])

    return (
        <div>
            <Backdrop
                open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}

export default Loader
