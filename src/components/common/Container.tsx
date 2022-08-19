import * as React from "react"
import cn from "classnames"

export default function Container({ className, classNameContent, title, actions, fluid, hasShadow, onGoBack, children }: Props) {
  const hasHeader = title || onGoBack;

  return (
    <div className={cn(
      fluid ? "container-fluid" : "container",
      className,
      "mx-auto",
      hasShadow && "shadow-md shadow-gray-100"
    )}>
      {
        hasHeader && (
          <>
            <div className="container-header flex justify-start items-center">
              {onGoBack && (
                <span>go back</span>
              )}
              {title && <h2 className="text-gray-600 text-xl font-bold mx-2">{title}</h2>}
              {actions && <div className="flex-1">{actions}</div>}
            </div>
            <hr className="mb-4" />
            <div className={`container-content ${classNameContent} `}>
              {children}
            </div>
          </>
        )
      }
      {
        !hasHeader && (
          children
        )
      }
    </div>
  );
}

Container.defaultProps = {
  className: "",
  classNameContent: "",
  title: "",
  actions: null,
  fluid: false,
  hasShadow: false,
}

type Props = {
  className?: string;
  classNameContent?: string;
  title?: string;
  actions?: React.ReactNode;
  fluid?: boolean;
  hasShadow?: boolean;
  onGoBack?: () => void;
  children: React.ReactNode;
}