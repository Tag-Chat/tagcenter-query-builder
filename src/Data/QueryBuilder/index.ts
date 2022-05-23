import {
  JsonGroup,
  Config,
  ImmutableTree,
  BuilderProps,
} from "react-awesome-query-builder";

import AntdConfig from "react-awesome-query-builder/lib/config/antd";

export const config: Config = {
  ...AntdConfig,
  fields: {
    qty: {
      label: "Qty",
      type: "number",
      fieldSettings: {
        min: 0,
      },
      valueSources: ["value"],
      preferWidgets: ["number"],
    },
    price: {
      label: "Price",
      type: "number",
      valueSources: ["value"],
      fieldSettings: {
        min: 10,
        max: 100,
      },
      preferWidgets: ["slider", "rangeslider"],
    },
    color: {
      label: "Color",
      type: "select",
      valueSources: ["value"],
      fieldSettings: {
        listValues: [
          { value: "yellow", title: "Yellow" },
          { value: "green", title: "Green" },
          { value: "orange", title: "Orange" },
        ],
      },
    },
    is_promotion: {
      label: "Promo?",
      type: "boolean",
      operators: ["equal"],
      valueSources: ["value"],
    },
  },
};
