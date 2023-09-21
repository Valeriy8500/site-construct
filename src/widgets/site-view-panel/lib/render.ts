import React from "react";

export const render = (path: string) => {
  switch (path) {
    case "construct-title":
      return React.lazy(() => import("@/features/construct-components/construct-title"));

    case "construct-paragraph":
      return React.lazy(() => import("@/features/construct-components/construct-paragraph"));

    case "construct-image":
      return React.lazy(() => import("@/features/construct-components/construct-image"));

    case "construct-divider":
      return React.lazy(() => import("@/features/construct-components/construct-divider"));

    case "construct-button":
      return React.lazy(() => import("@/features/construct-components/construct-button"));

    case "construct-quote":
      return React.lazy(() => import("@/features/construct-components/construct-quote"));

    case "construct-li":
      return React.lazy(() => import("@/features/construct-components/construct-li"));

    case "construct-ol":
      return React.lazy(() => import("@/features/construct-components/construct-ol"));

    case "construct-input":
      return React.lazy(() => import("@/features/construct-components/construct-input"));

    case "construct-textarea":
      return React.lazy(() => import("@/features/construct-components/construct-textarea"));

    case "construct-checkbox":
      return React.lazy(() => import("@/features/construct-components/construct-checkbox"));

    case "construct-radio":
      return React.lazy(() => import("@/features/construct-components/construct-radio"));

    case "construct-select":
      return React.lazy(() => import("@/features/construct-components/construct-select"));

    case "construct-form-button":
      return React.lazy(() => import("@/features/construct-components/construct-form-button"));

    default:
      return null;
  }
};
