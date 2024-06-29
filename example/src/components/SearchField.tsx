import { css, cx } from "../../styled-system/css";

import {
  SearchField as RACSearchField,
  ValidationResult,
  type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components";
import { Button } from "./Button";
import { Description, FieldError, FieldGroup, Input, Label } from "./Field";
import { Icon } from "./Icon";

export type SearchFieldProps = Omit<RACSearchFieldProps, "className"> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
};

export function SearchField({
  label,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  return (
    <RACSearchField
      data-group
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1", minW: "40px" })
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup>
        <Icon
          name="search"
          className={css({
            w: "4",
            h: "4",
            ml: "2",
            color: "gray.500",
            _dark: { color: "zinc.400" },
            _groupDisabled: { color: "gray.200", _dark: { color: "zinc.600" } },
          })}
        />
        <Input
          className={css({
            _searchCancelButtons: { display: "none" },
          })}
        />
        <Button
          variant="icon"
          className={css({
            mr: "1",
            w: "6",
            _groupEmpty: { visibility: "hidden" },
          })}
        >
          <Icon name="x" className={css({ w: "4", h: "4" })} />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACSearchField>
  );
}
