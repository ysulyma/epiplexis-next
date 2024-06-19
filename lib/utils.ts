import classNames from "classnames";
import {type ClassValue, clsx} from "clsx";
import {Children, createElement, forwardRef} from "react";
import {ClassNameValue, twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a styled component from a template. Handles forwarding refs.
 */
export function brand<TagName extends keyof JSX.IntrinsicElements>(
  displayName: string,
  template: React.ReactNode,
  mergeClassNames: (...args: ClassNameValue[]) => string = classNames,
) {
  type Ref = React.ComponentRef<TagName>;
  type Props = JSX.IntrinsicElements[TagName];
  const node = Children.only(template) as React.ReactElement<Props, TagName>;
  const {className: templateClassName, ...templateProps} = node.props as ({className?: string;} & typeof node.props);

  const component = function (
    {className, ...props}: Props & {className?: string},
    ref: React.ForwardedRef<Ref>,
  ) {
    return createElement(node.type, {
      className: mergeClassNames(templateClassName, className),
      ...templateProps,
      ...props,
      ref,
    });
  };
  component.displayName = displayName;

  return forwardRef(component);
}