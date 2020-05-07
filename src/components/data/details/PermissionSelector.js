/**
 * @author aramsey
 *
 * A basic Menu component for displaying permission options
 * See models/Permissions
 */

import React, { Fragment, useState } from "react";
import { build, getMessage, withI18N } from "@cyverse-de/ui-lib";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@material-ui/core";
import { Check, Edit } from "@material-ui/icons";

import ids from "../ids";
import messages from "../messages";
import Permissions from "../../models/Permissions";

function PermissionSelector(props) {
    const { baseId, currentPermission, onPermissionChange } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const onEditClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleEditClose = () => {
        setAnchorEl(null);
    };

    const menuId = build(baseId, ids.PERMISSION_MENU);

    return (
        <>
            <IconButton
                id={build(baseId, ids.PERMISSION_MENU_BTN)}
                aria-controls={menuId}
                aria-haspopup={true}
                onClick={onEditClick}
            >
                <Edit />
            </IconButton>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                value={currentPermission}
                open={Boolean(anchorEl)}
                onClose={handleEditClose}
            >
                {Object.keys(Permissions).map((permissionKey) => {
                    const permissionValue = Permissions[permissionKey];
                    return (
                        <MenuItem
                            key={permissionKey}
                            id={build(menuId, ids[permissionKey])}
                            onClick={() => {
                                handleEditClose();
                                onPermissionChange(permissionValue);
                            }}
                        >
                            <ListItemIcon>
                                {permissionValue === currentPermission ? (
                                    <Check />
                                ) : (
                                    <Fragment />
                                )}
                            </ListItemIcon>
                            {getMessage(permissionValue)}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
}

export default withI18N(PermissionSelector, messages);
