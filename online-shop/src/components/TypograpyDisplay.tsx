import React from 'react';
import { Typography } from '@material-ui/core';

interface DivContent {
    productdetail: string,
    className: string,
}

const TypographyDisplay = (props: DivContent) => {
    return (<Typography color="primary">
        <div className={props.className}>{props.productdetail}</div>
    </Typography>
    )
}
export default TypographyDisplay
