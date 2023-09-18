import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const createRootElement = (id: string) => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
};

function addRootElement(rootElem: Element) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

export const usePortal = (id: string) => {
  const rootElemRef = useRef<Element | null>(null);

  const location = useLocation();

  useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${id}`);
      const parentElem = existingParent || createRootElement(id);

      if (!existingParent) {
        addRootElement(parentElem);
      }
      parentElem.appendChild(rootElemRef.current!);
    },
    [id, location]
  );

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  return getRootElem();
};
