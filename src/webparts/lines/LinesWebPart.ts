import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

import * as strings from "LinesWebPartStrings";
import Table from "./components/Table";
import { ILinesProps } from "./components/ILinesProps";
import pnp from "sp-pnp-js";

export interface ILinesWebPartProps {
  description: any;
}

export default class LinesWebPart extends BaseClientSideWebPart<ILinesWebPartProps> {
  private _isDarkTheme: boolean = false;

  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      pnp.setup({
        spfxContext: this.context,
      });
    });
  }

  public render(): void {
    const element: React.ReactElement = React.createElement(Table, {
      props: this._isDarkTheme,
    });

    ReactDom.render(element, this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
