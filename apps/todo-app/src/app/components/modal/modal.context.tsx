import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ContextType = {
  openModal: (id: string, modal: ReactNode) => void;
  closeModal: (id: string) => void;
};

export const modalContext = createContext<ContextType>({
  openModal: () => undefined,
  closeModal: () => undefined,
});

const createElement = (id: string): HTMLElement => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const ModalProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [modals, setModals] = useState<
    {
      elem: HTMLElement;
      id: string;
      node: ReactNode;
    }[]
  >([]);

  const [showModal, setShowModal] = useState(false);

  const openModal = (id: string, node: ReactNode) => {
    if (modals.findIndex((modal) => modal.id === id) === -1) {
      const el =
        document.querySelector<HTMLElement>(`#${id}`) ?? createElement(id);
      document.body.appendChild(el);
      modals.push({
        id,
        elem: el,
        node,
      });

      setModals([...modals]);
    } else {
      const newModals = modals.map((modal) => {
        if (id === modal.id) {
          return {
            ...modal,
            node,
          };
        }

        return modal;
      });

      setModals([...newModals]);
    }
  };

  const closeModal = (id: string) => {
    const el = document.querySelector<HTMLElement>(`#${id}`);
    if (el) {
      document.body.removeChild(el);
    }

    const newModals = modals.filter((modal) => {
      return modal.id !== id;
    });

    setModals([...newModals]);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <modalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((modal) => createPortal(modal.node, modal.elem))}
    </modalContext.Provider>
  );
};
