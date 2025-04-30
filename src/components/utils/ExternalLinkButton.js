/**
 * A MUI Link for linking to external pages, opening in new tab.
 *
 * @author mwall
 */
import React from "react";
import theme from "components/theme/default";

import { Link, Button } from "@mui/material";

const ExternalLinkButton = (props) => {
    return (
        <Button
            fullWidth
            style={{
                margin: theme.spacing(0.4),
            }}
            size="large"
        >
            <Link target="_blank" rel="noopener noreferrer" {...props} />
        </Button>
    );
};

export default ExternalLinkButton;
