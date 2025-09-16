import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  closeOnOverlay?: boolean;
};

export const Modal = ({
  open,
  onClose,
  title,
  children,
  closeOnOverlay = true,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const titleIdRef = useRef(
    `modal-title-${Math.random().toString(36).slice(2)}`
  );

  // Garantir que o portal só rode no cliente (Next.js/SSR)
  useEffect(() => setMounted(true), []);

  // Bloqueia rolagem do body enquanto aberto
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Fechar no ESC + foco inicial + trap de TAB
  useEffect(() => {
    if (!open) return;

    const node = dialogRef.current;
    if (!node) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, onClose]);

  if (!mounted) return null;
  if (!open) return null;

  const overlay = (
    <div
      ref={overlayRef}
      role="presentation"
      onClick={(e) => {
        if (closeOnOverlay && e.target === overlayRef.current) onClose();
      }}
      className="modal-overlay"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleIdRef.current : undefined}
        // Caixa do modal posicionada com position: absolute
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="modal-header">
          {title && (
            <h2 id={titleIdRef.current} className="modal-title">
              {title}
            </h2>
          )}
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="modal-closeBtn"
          >
            ×
          </button>
        </div>

        <div className="modal-content">{children}</div>

        <div className="modal-footer">
          <button type="button" onClick={onClose} className="modal-primaryBtn">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};
