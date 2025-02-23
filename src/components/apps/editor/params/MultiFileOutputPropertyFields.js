/**
 * A form component for editing App `MultiFileOutput` parameter properties.
 *
 * @author psarando
 */
import React from "react";

import { useTranslation } from "i18n";

import FileInfoTypesSelector from "./FileInfoTypesSelector";

import ArgumentOptionField from "./common/ArgumentOptionField";
import DefaultValueField from "./common/DefaultValueField";
import DescriptionField from "./common/DescriptionField";
import ExcludeArgumentField from "./common/ExcludeArgumentField";
import ImplicitField from "./common/ImplicitField";
import LabelField from "./common/LabelField";
import RequiredField from "./common/RequiredField";
import VisibleField from "./common/VisibleField";

import FormTextField from "components/forms/FormTextField";

import { Grid } from "@material-ui/core";

export default function MultiFileOutputPropertyFields(props) {
    const { baseId, cosmeticOnly, fieldName } = props;

    const { t } = useTranslation([
        "app_editor",
        "app_editor_help",
        "app_param_types",
    ]);

    const fileParamsFieldName = `${fieldName}.file_parameters`;

    return (
        <Grid container direction="column">
            <LabelField baseId={baseId} fieldName={fieldName} />
            <ArgumentOptionField
                baseId={baseId}
                fieldName={fieldName}
                disabled={cosmeticOnly}
            />
            <DefaultValueField
                baseId={baseId}
                fieldName={fieldName}
                label={t("multiFileOutputDefaultLabel")}
                component={FormTextField}
                disabled={cosmeticOnly}
            />
            <DescriptionField baseId={baseId} fieldName={fieldName} />

            <RequiredField
                baseId={baseId}
                fieldName={fieldName}
                disabled={cosmeticOnly}
            />
            <VisibleField
                baseId={baseId}
                fieldName={fieldName}
                disabled={cosmeticOnly}
            />
            <ExcludeArgumentField
                baseId={baseId}
                fieldName={fieldName}
                disabled={cosmeticOnly}
            />

            <FileInfoTypesSelector
                baseId={baseId}
                disabled={cosmeticOnly}
                fieldName={fileParamsFieldName}
                label={t("multiFileInfoTypeLabel")}
            />

            <ImplicitField
                baseId={baseId}
                fieldName={fileParamsFieldName}
                helperText={t("app_editor_help:IsImplicitOutput")}
                disabled={cosmeticOnly}
            />
        </Grid>
    );
}
