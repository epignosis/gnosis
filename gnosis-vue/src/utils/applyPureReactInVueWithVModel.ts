import { defineComponent, h, type PropType, type Component } from "vue";
import { applyPureReactInVue } from "veaury";

export interface VModelMapping {
  reactValueProp: string;
  reactChangeProp: string;
  getValueFromArgs: (...args: any[]) => any;
}

export const inputLike: VModelMapping = {
  reactValueProp: "value",
  reactChangeProp: "onChange",
  getValueFromArgs: (e) => e.target.value,
};

export const checkboxLike: VModelMapping = {
  reactValueProp: "checked",
  reactChangeProp: "onChange",
  getValueFromArgs: (e) => e.target.checked,
};

export const selectLike: VModelMapping = {
  reactValueProp: "value",
  reactChangeProp: "onChange",
  getValueFromArgs: (option) => option,
};

export const toggleLike: VModelMapping = {
  reactValueProp: "defaultChecked",
  reactChangeProp: "onChange",
  getValueFromArgs: (isChecked) => isChecked,
};

export function applyPureReactInVueWithVModel(
  ReactComponent: any,
  mapping: VModelMapping,
): Component {
  const Wrapped = applyPureReactInVue(ReactComponent);

  return defineComponent({
    name: `VModel_${ReactComponent.displayName || ReactComponent.name || "Component"}`,
    inheritAttrs: false,
    props: {
      modelValue: { type: null as unknown as PropType<any>, default: undefined },
    },
    emits: ["update:modelValue"],
    setup(props, { emit, attrs, slots }) {
      return () => {
        const bridgedProps: Record<string, any> = {
          ...attrs,
          [mapping.reactValueProp]: props.modelValue,
          [mapping.reactChangeProp]: (...args: any[]) => {
            emit("update:modelValue", mapping.getValueFromArgs(...args));
            const original = attrs[mapping.reactChangeProp];
            if (typeof original === "function") (original as Function)(...args);
          },
        };
        return h(Wrapped, bridgedProps, slots);
      };
    },
  });
}
