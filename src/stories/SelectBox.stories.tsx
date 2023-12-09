import React from "react";
import { Meta, Story } from "@storybook/react";
import { SelectBox } from "components";

export default {
  title: "reactezopenbanking/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox: Story<any> = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "round",
  variant: "fill",
  color: "white_A700",
  size: "xs",
  className: "w-[300px]",
};
