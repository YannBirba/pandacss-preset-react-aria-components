import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { createConditions } from "./rac";

/**
 * Create a new PandaCSS react-aria-component preset.
 *
 * @returns A newly created preset.
 */
export const RACPreset = (): Preset => {
  return definePreset({
    conditions: {
      extend: createConditions(),
    },
  });
};
