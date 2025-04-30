/**
 * @author sriram
 *
 * A banner to display for logged out users.
 *
 */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "i18n";
import { useRouter } from "next/router";
import { useConfig } from "contexts/config";

import NavigationConstants from "common/NavigationConstants";

import {
    Paper,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    Button,
    Box,
} from "@mui/material";
import constants from "../../../constants";
import ExternalLinkButton from "components/utils/ExternalLinkButton";

export default function Banner(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { t } = useTranslation("dashboard");
    const router = useRouter();
    const [config] = useConfig();

    //const cyverse_url = config?.cyverseURL;

    const onLoginClick = (event) => {
        router.push(`/${NavigationConstants.LOGIN}${router.asPath}`);
    };

    const userPortalURLRef = useRef(constants.DEFAULT_USER_PORTAL_URL);
    useEffect(() => {
        if (config?.userPortalURL) {
            userPortalURLRef.current = config.userPortalURL;
        }
    }, [config]);

    return (
        <Paper elevation={0}>
            <Grid
                container
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems="center"
                spacing={isMobile ? 1 : 3}
                style={{ marginTop: "2rem", margin: "0 auto" }}
            >
                <Grid item xs={isMobile ? 12 : 6}>
                    <Image
                        src="/scienceBanner.svg"
                        alt={t("banner")}
                        priority
                        height={400}
                        width={800}
                        loading="eager"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center"
                        spacing={isMobile ? 1 : 3}
                        style={{ textAlign: "center" }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                variant={isMobile ? "subtitle2" : "h4"}
                                color="primary"
                            >
                                {t("welcomeCyverseHealth")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant={isMobile ? "caption" : "body1"}
                            >
                                {t("compliantMessage")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant={isMobile ? "caption" : "body1"}
                            >
                                {t("learnMessage")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                size="large"
                                fullWidth
                                variant="contained"
                                href="#"
                                onClick={onLoginClick}
                                style={{
                                    margin: theme.spacing(0.4),
                                    backgroundColor: theme.palette.uaRiver,
                                    color: theme.palette.white,
                                }}
                                underline="hover"
                            >
                                {t("login")}
                            </Button>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box>
                                    <ExternalLinkButton
                                        href={constants.GETTING_STARTED}
                                    >
                                        {t("gettingStarted")}
                                    </ExternalLinkButton>
                                </Box>
                                <Box>
                                    <ExternalLinkButton
                                        href={userPortalURLRef.current}
                                    >
                                        {t("signUp")}
                                    </ExternalLinkButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
