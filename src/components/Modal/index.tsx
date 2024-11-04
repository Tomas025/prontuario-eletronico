import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { FaCheck } from 'react-icons/fa6';
import { FiInfo, FiX } from 'react-icons/fi';
import { GoAlert } from 'react-icons/go';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction
} from '../ui/alert-dialog';

// Define os tipos de modais
type ModalType = 'success' | 'warning' | 'danger' | 'info';

interface Button {
  label: string;
  onClick: () => void;
  color?: ModalType; // Pode ser um tipo para definir a cor com base no tipo do modal
}

interface ModalProps {
  type: ModalType;
  title: string;
  message: string;
  buttons?: Button[];
  isOpen: boolean;
  onClose: () => void;
  autoCloseTime?: number; // Tempo para fechamento automático, em milissegundos
}

// Ícones baseados no tipo do modal
const getIcon = (type: ModalType): IconType => {
  switch (type) {
    case 'success':
      return FaCheck;
    case 'warning':
      return GoAlert;
    case 'danger':
      return FiX;
    case 'info':
      return FiInfo;
    default:
      return FiInfo;
  }
};

// Cores baseadas no tipo do modal
const getIconColor = (type: ModalType): string => {
  switch (type) {
    case 'success':
      return 'text-green/01';
    case 'warning':
      return 'text-orange';
    case 'danger':
      return 'text-red/01';
    case 'info':
      return 'text-otherBlue';
    default:
      return 'text-otherBlue';
  }
};

// Cores de fundo dos botões com base no tipo do modal
const getButtonColor = (type: ModalType): string => {
  switch (type) {
    case 'success':
      return 'bg-green/01 hover:bg-green/02';
    case 'warning':
      return 'bg-orange hover:bg-orange/90';
    case 'danger':
      return 'bg-red/01 hover:bg-red/02';
    case 'info':
      return 'bg-otherBlue hover:bg-otherBlue/02';
    default:
      return 'bg-gray/01 hover:bg-gray/04';
  }
};

const Modal: React.FC<ModalProps> = ({
  type,
  title,
  message,
  buttons,
  isOpen,
  onClose,
  autoCloseTime
}) => {
  const Icon = getIcon(type);

  // Fechamento automático do modal, caso `autoCloseTime` seja definido
  useEffect(() => {
    if (autoCloseTime && isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [autoCloseTime, isOpen, onClose]);

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-sm rounded-lg shadow-lg bg-white text-center border border-gray-03">
        <AlertDialogHeader className="flex flex-col items-center justify-center">
          <Icon className={`text-4xl ${getIconColor(type)}`} />
          <AlertDialogTitle className="title text-blue/01">
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text px-4 text-blue/01">
          {message}
        </AlertDialogDescription>

        {/* Centralizando o Footer e os Botões */}
        {buttons && buttons.length > 0 && (
          <AlertDialogFooter className="flex !justify-center space-x-3">
            {buttons.map((button, index) => (
              <AlertDialogAction
                key={index}
                onClick={button.onClick}
                className={`px-5 py-3 rounded-md font-medium text-xs text-white ${getButtonColor(button.color || type)}`}
              >
                {button.label}
              </AlertDialogAction>
            ))}
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
