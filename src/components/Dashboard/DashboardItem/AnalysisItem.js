import React from "react";
import {
    BarChart,
    FolderOpen,
    Replay,
    Info,
    Stop,
    Share,
} from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";
import { formatDate } from "@cyverse-de/ui-lib";

import * as constants from "../constants";

import ItemBase, { ItemAction } from "./ItemBase";

class AnalysisItem extends ItemBase {
    constructor({ section, content, height, width }) {
        super({
            kind: constants.KIND_ANALYSES,
            content,
            section,
            height,
            width,
        });
    }

    static create(props) {
        const item = new AnalysisItem(props);
        return item
            .addActions([
                <ItemAction
                    ariaLabel="relaunch"
                    key={`${constants.KIND_ANALYSES}-${props.content.id}-relaunch`}
                >
                    <Replay />
                </ItemAction>,
                <ItemAction
                    ariaLabel="go to output files"
                    key={`${constants.KIND_ANALYSES}-${props.content.id}-outputs`}
                >
                    <FolderOpen />
                </ItemAction>,
            ])
            .addMenuActions([
                <MenuItem
                    ariaLabel="stop"
                    key={`${constants.KIND_ANALYSES}-${props.content.id}-stop`}
                >
                    <Stop />
                </MenuItem>,
                <MenuItem
                    ariaLabel="open details"
                    key={`${constants.KIND_ANALYSES}-${props.content.id}-details`}
                >
                    <Info />
                </MenuItem>,
                <MenuItem
                    ariaLabel="share"
                    key={`${constants.KIND_ANALYSES}-${props.content.id}-share`}
                >
                    <Share />
                </MenuItem>,
            ]);
    }

    getOrigination(t) {
        const origination = t("startedBy");
        const date = new Date(this.content.start_date);

        return [origination, formatDate(date.valueOf())];
    }

    getAvatarIcon(classes) {
        return (
            <BarChart
                color="primary"
                classes={{ colorPrimary: classes.avatarIcon }}
            />
        );
    }

    getLinkTarget() {
        return `/analyses/${this.content.id}/details`;
    }
}

export default AnalysisItem;
