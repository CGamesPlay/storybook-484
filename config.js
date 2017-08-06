import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { configure, addDecorator, storiesOf } from "@storybook/react";

addDecorator(story =>
  <MuiThemeProvider>
    {story()}
  </MuiThemeProvider>,
);

function loadStories() {
  storiesOf("RaisedButton", module).add("basic", () =>
    <RaisedButton label="button 1" />,
  );
}

configure(loadStories, module);
