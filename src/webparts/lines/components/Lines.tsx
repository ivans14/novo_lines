import * as React from "react";
import { ILinesProps } from "./ILinesProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Lines extends React.Component<ILinesProps, {}> {
  public render(): React.ReactElement<ILinesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return <section></section>;
  }
}
