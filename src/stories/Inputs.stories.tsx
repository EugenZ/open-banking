import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "reactezopenbanking/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder15",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
