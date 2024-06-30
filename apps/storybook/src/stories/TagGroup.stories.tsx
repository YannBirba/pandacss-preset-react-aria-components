import type { Meta } from "@storybook/react";
import { useListData } from "react-stately";
import { Tag, TagGroup, TagProps } from "../components/TagGroup";

const meta: Meta<typeof Example> = {
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const initialItems: Array<TagProps & { name: string }> = [
  { id: 1, name: "Chocolate" },
  { id: 2, name: "Mint" },
  { id: 3, name: "Strawberry", isDisabled: true },
  { id: 4, name: "Vanilla" },
];

export const Example = (args: any) => {
  const list = useListData({
    initialItems,
  });

  const handleRemove = (keys: number[]) => {
    list.remove(...keys);
    if (list.items.length === 1) {
      list.append(...initialItems);
    }
  };

  return (
    <TagGroup {...args} items={list.items} onRemove={handleRemove}>
      {(item) => <Tag {...item}>{item.name}</Tag>}
    </TagGroup>
  );
};

Example.args = {
  label: "Ice cream flavor",
  selectionMode: "single",
};
