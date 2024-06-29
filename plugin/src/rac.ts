import { preset } from "@pandacss/preset-base";
import type { Conditions } from "@pandacss/types";

// css panda preset base conditions
const pandaThemeConditions = preset.conditions as Record<string, string>;


// Here we remove peer and group conditions + the & selector, as we will add it back in later.
const filteredThemeConditions: Record<string, string> = {};

// TODO: traduire les commentaires en anglais
// Parcourir les clés de l'objet original
for (const key in pandaThemeConditions) {
  // Vérifier que la clé ne commence pas par "peer" ou "group"
  if (!key.startsWith("peer") && !key.startsWith("group")) {
    // Récupérer le sélecteur correspondant
    let selector = pandaThemeConditions[key] as string;
    // Enlever le caractère "&" et trimmer le sélecteur
    selector = selector.replace(/&/g, "").trim();
    // Ajouter l'entrée filtrée dans le nouvel objet
    filteredThemeConditions[key] = selector;
  }
}

// We mostly follow Pandacss's defaults, adding our additional states following the categories they define.
const RACAttributes: {
  boolean: Array<string | [string, string]>;
  enum: Record<string, Array<string>>;
} = {
  boolean: [
    // Conditions
    "allows-removing",
    "allows-sorting",
    "allows-dragging",
    "has-submenu",

    // States
    "open",
    "entering",
    "exiting",
    "indeterminate",
    ["placeholder", "placeholder-shown"],
    "current",
    "required",
    "unavailable",
    "invalid",
    ["read-only", "readonly"],
    "outside-month",
    "outside-visible-range",

    // Content
    "empty",

    // Interactive states
    "focus-within",
    ["hover", "hovered"],
    ["focus", "focused"],
    "focus-visible",
    "pressed",
    "selected",
    "selection-start",
    "selection-end",
    "dragging",
    "drop-target",
    "resizing",
    "disabled",
  ],
  enum: {
    placement: ["left", "right", "top", "bottom"],
    type: ["literal", "year", "month", "day"],
    layout: ["grid", "stack"],
    orientation: ["horizontal", "vertical"],
    "selection-mode": ["single", "multiple"],
    "resizable-direction": ["right", "left", "both"],
    "sort-direction": ["ascending", "descending"],
  },
};

const shortNames: Record<string, string> = {
  "selection-mode": "selection",
  "resizable-direction": "resizable",
  "sort-direction": "sort",
};

// We don't want to override these conditions.
const doNotOverride: Array<string> = [
  "focusWithin",
  "active",
  "visited",
  "target",
  "readWrite",
  "enabled",
  "expanded",
  "highlighted",

  "before",
  "after",
  "firstLetter",
  "firstLine",
  "marker",
  "file",
  "backdrop",

  "first",
  "last",
  "only",
  "even",
  "odd",

  "firstOfType",
  "lastOfType",
  "onlyOfType",

  "valid",
  "autofill",
  "inRange",
  "outOfRange",
  "placeholder",
  "placeholderShown",
  "pressed",

  "default",
  "optional",
  "closed",
  "fullscreen",
  "loading",

  "currentPage",
  "currentStep",

  "motionReduce",
  "motionSafe",
  "print",
  "landscape",
  "portrait",

  "dark",
  "light",
  "osDark",
  "osLight",

  "highContrast",
  "lessContrast",
  "moreContrast",

  "ltr",
  "rtl",

  "scrollbar",
  "scrollbarThumb",
  "scrollbarTrack",

  "horizontal",
  "vertical",

  "starting",
];

const prefixes = ["group", "peer"] as const;

const kebabToCamel = (str: string) =>
  str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

// If no prefix is specified, we want to avoid overriding native conditions on non-RAC components, so we only target elements with the data-rac attribute for those conditions.
const getSelector = (
  conditionName: string,
  attributeName: string,
  attributeValue: string | null,
  prefix?: "group" | "peer"
) => {
  const targetSelector = prefix === "peer" ? "~ &" : " &";
  const prefixString = prefix ? `:where(.${prefix}, [data-${prefix}])` : "";
  const baseSelector = attributeValue
    ? `[data-${attributeName}="${attributeValue}"]`
    : `[data-${attributeName}]`;
  
  // const nativeSelector = nativeConditionSelectors.get(attributeName);
  // if it's a condition already supported by Pandacss and we can override it, we do so.
  if (
    !doNotOverride.includes(conditionName) &&
    filteredThemeConditions[kebabToCamel(conditionName)]
  ) {
    const pandaSelector = filteredThemeConditions[kebabToCamel(conditionName)];
    const wrappedNativeSelector = prefix
      ? `${prefixString}:where(:not([data-rac]))${pandaSelector}${targetSelector}`
      : `&:where(:not([data-rac]))${pandaSelector}`;
    let nativeSelectorGenerator:
      | string
      | ((wrap: (string: string) => string) => string) = wrappedNativeSelector;
    // if (nativeSelector === ":hover") {
    //   nativeSelectorGenerator = (wrap) =>
    //     // `@media (hover: hover) and (pointer: fine) { ${wrap(wrappedNativeSelector)} }`;
    //     [
    //       "@media (hover: hover) and (pointer: fine)",
    //       wrap(wrappedNativeSelector),
    //     ];
    // }
    return prefix
      ? `${prefixString}:where([data-rac]):where(${baseSelector})${targetSelector}, ${nativeSelectorGenerator}`
      : `&:where([data-rac]):where(${baseSelector}), ${nativeSelectorGenerator}`;
  }
  // if it's a condition that is already supported by Pandacss, we sim
  // else if (
  //
  // ) {
  //   // return [
  //   //   prefix
  //   //     ? `${prefixString}${baseSelector}${targetSelector}`
  //   //     : `&${baseSelector}`,
  //   //   // prefix
  //   //   //   ? `${prefixString}${nativeMergeSelectors.get(attributeName)} ${targetSelector}`
  //   //   //   : `&${nativeMergeSelectors.get(attributeName)}`,
  //   //   prefix
  //   //     ? `${prefixString}:where(${pandaThemeConditions[attributeName]}) ${targetSelector}`
  //   //     : `&:where(${pandaThemeConditions[attributeName]})`,
  //   // ];
  //   return prefix
  //     ? `${prefixString}${baseSelector} ${targetSelector}`
  //     : `&${baseSelector}`;
  // }
  return prefix
    ? `${prefixString}${baseSelector}${targetSelector}`
    : `&${baseSelector}`;
};

type SelectorWrapper = (selector: string | Array<string>) => string;

const mapSelector = (
  selectors: string | Array<string>,
  fn: SelectorWrapper
) => {
  if (Array.isArray(selectors)) {
    return selectors.map(fn);
  } else {
    return fn(selectors);
  }
};

const wrapSelector = (
  selector: string | Array<string> | Function,
  wrap: SelectorWrapper
) => {
  if (typeof selector === "function") {
    return selector(wrap);
  } else {
    return wrap(selector);
  }
};

const createCondition = (selectors: string | Array<string>) => {
  if (Array.isArray(selectors)) {
    return selectors.join(", ");
  }
  return selectors;
};

export const createConditions = (): Conditions => {
  const conditions: Conditions = {};
  // Enum attributes go first because currently they are all non-interactive states.
  Object.keys(RACAttributes.enum).forEach((attributeName) => {
    if (RACAttributes.enum[attributeName]) {
      RACAttributes.enum[attributeName]?.forEach((attributeValue) => {
        const name = shortNames[attributeName] || attributeName;
        const conditionName = kebabToCamel(`${name}-${attributeValue}`);
        const selectors = getSelector(
          attributeName,
          attributeName,
          attributeValue
        );
        conditions[conditionName] = createCondition(
          mapSelector(selectors, (selector) => wrapSelector(selector, (s) => s))
        );

        prefixes.forEach((prefix) => {
          const conditionNameUcFirst = `${conditionName.charAt(0).toUpperCase()}${conditionName.slice(1)}`;
          const selectors = getSelector(
            attributeName,
            attributeName,
            attributeValue,
            prefix
          );
          conditions[
            `${prefix}${conditionNameUcFirst
              .split("-")
              .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
              .join("")}`
          ] = createCondition(
            mapSelector(selectors, (selector) =>
              wrapSelector(selector, (s) => s)
            )
          );
        });
      });
    }
  });

  RACAttributes.boolean.forEach((attribute) => {
    const conditionName = Array.isArray(attribute) ? attribute[0] : attribute;

    if (!conditionName) {
      throw new Error(`No condition name specified for ${attribute}`);
    }

    const attributeValue = Array.isArray(attribute) ? attribute[1] : attribute;

    if (!attributeValue) {
      throw new Error(`No attribute value specified for ${attribute}`);
    }

    const selectors = getSelector(conditionName, attributeValue, null);
    conditions[kebabToCamel(conditionName)] = createCondition(
      mapSelector(selectors, (selector) => wrapSelector(selector, (s) => s))
    );

    prefixes.forEach((prefix) => {
      const conditionNameUcFirst = `${conditionName.charAt(0).toUpperCase()}${conditionName.slice(1)}`;
      const selectors = getSelector(
        conditionName,
        attributeValue,
        null,
        prefix
      );
      conditions[
        `${prefix}${conditionNameUcFirst
          .split("-")
          .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
          .join("")}`
      ] = createCondition(
        mapSelector(selectors, (selector) => wrapSelector(selector, (s) => s))
      );
    });
  });

  return conditions;
};
