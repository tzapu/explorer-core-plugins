import React from "react";
import { IModuleDef } from "plugin-api/IModuleDef";
import { MenuItem } from "plugin-api/component/topbar/MenuItem";
import { ITranslation } from "plugin-api/ITranslation";
import { ExternalLink } from "plugin-api/component/ExternalLink";
import { ProductIconButton } from "@alethio/ui/lib/layout/toolbar/ProductIconButton";
import { AlethioMonitoringIcon } from "@alethio/ui/lib/icon/AlethioMonitoringIcon";

interface IAlethioMonitoringProps {
    translation: ITranslation;
}

export const alethioMonitoringModule: (alethioMonitoringUrl: string) => IModuleDef<IAlethioMonitoringProps, {}> =
(alethioMonitoringUrl) => ({
    contextType: {},
    dataAdapters: [],
    getContentComponent: async () => (props) => (
        <MenuItem title={props.translation.get("toolbar.monitoring.label")}>
            <ExternalLink href={alethioMonitoringUrl} rel="noopener noreferrer">
                <ProductIconButton Icon={AlethioMonitoringIcon} />
            </ExternalLink>
        </MenuItem>
    ),
    getContentProps : data => data
});
