// 'use client';
// import React, { useState } from 'react';

// import Modal from '../components/Modal';

// const App: React.FC = () => {
//   // Estados para controlar a visibilidade de cada modal
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showWarningModal, setShowWarningModal] = useState(false);
//   const [showDangerModal, setShowDangerModal] = useState(false);
//   const [showInfoModal, setShowInfoModal] = useState(false);

//   const [showAutoSuccessModal, setShowAutoSuccessModal] = useState(false);
//   const [showAutoWarningModal, setShowAutoWarningModal] = useState(false);
//   const [showAutoDangerModal, setShowAutoDangerModal] = useState(false);
//   const [showAutoInfoModal, setShowAutoInfoModal] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-4">
//       <h1 className="text-2xl font-bold mb-6">
//         Demo de Modais com TailwindCSS
//       </h1>

//       {/* Botões para abrir cada tipo de modal */}
//       <button
//         onClick={() => setShowSuccessModal(true)}
//         className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//       >
//         Abrir Modal de Sucesso com Botão
//       </button>
//       <button
//         onClick={() => setShowWarningModal(true)}
//         className="px-4 py-2 bg-yellow text-white rounded-md hover:bg-yellow-600"
//       >
//         Abrir Modal de Alerta com Botões
//       </button>
//       <button
//         onClick={() => setShowDangerModal(true)}
//         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//       >
//         Abrir Modal de Perigo com Botão
//       </button>
//       <button
//         onClick={() => setShowInfoModal(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Abrir Modal de Informação com Botão
//       </button>

//       {/* Botões para abrir os modais de fechamento automático */}
//       <button
//         onClick={() => setShowAutoSuccessModal(true)}
//         className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//       >
//         Abrir Modal de Sucesso (Auto-close)
//       </button>
//       <button
//         onClick={() => setShowAutoWarningModal(true)}
//         className="px-4 py-2 bg-yellow text-white rounded-md hover:bg-yellow-600"
//       >
//         Abrir Modal de Alerta (Auto-close)
//       </button>
//       <button
//         onClick={() => setShowAutoDangerModal(true)}
//         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//       >
//         Abrir Modal de Perigo (Auto-close)
//       </button>
//       <button
//         onClick={() => setShowAutoInfoModal(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Abrir Modal de Informação (Auto-close)
//       </button>

//       {/* Modais - Condicionalmente renderizados com base nos estados */}

//       {/* Modal de Sucesso com Botão */}
//       {showSuccessModal && (
//         <Modal
//           type="success"
//           title="Sucesso"
//           message="A operação foi concluída com sucesso!"
//           buttons={[
//             {
//               label: 'OK',
//               onClick: () => setShowSuccessModal(false),
//               color: 'success'
//             }
//           ]}
//           isOpen={showSuccessModal}
//           onClose={() => setShowSuccessModal(false)}
//         />
//       )}

//       {/* Modal de Alerta com Botões */}
//       {showWarningModal && (
//         <Modal
//           type="warning"
//           title="Alerta"
//           message="Deseja realmente salvar as alterações?"
//           buttons={[
//             {
//               label: 'Salvar',
//               onClick: () => console.log('Salvar clicked'),
//               color: 'success'
//             },
//             {
//               label: 'Cancelar',
//               onClick: () => setShowWarningModal(false),
//               color: 'danger'
//             }
//           ]}
//           isOpen={showWarningModal}
//           onClose={() => setShowWarningModal(false)}
//         />
//       )}

//       {/* Modal de Perigo com Botão */}
//       {showDangerModal && (
//         <Modal
//           type="danger"
//           title="Perigo"
//           message="Esta ação é irreversível. Deseja continuar?"
//           buttons={[
//             {
//               label: 'Voltar',
//               onClick: () => setShowDangerModal(false),
//               color: 'danger'
//             }
//           ]}
//           isOpen={showDangerModal}
//           onClose={() => setShowDangerModal(false)}
//         />
//       )}

//       {/* Modal de Informação com Botão */}
//       {showInfoModal && (
//         <Modal
//           type="info"
//           title="Informação"
//           message="Esta é uma mensagem informativa."
//           buttons={[
//             {
//               label: 'OK',
//               onClick: () => setShowInfoModal(false),
//               color: 'info'
//             }
//           ]}
//           isOpen={showInfoModal}
//           onClose={() => setShowInfoModal(false)}
//         />
//       )}

//       {/* Modal de Sucesso (Auto-close) */}
//       {showAutoSuccessModal && (
//         <Modal
//           type="success"
//           title="Sucesso"
//           message="Operação concluída com sucesso. Este modal fechará automaticamente."
//           isOpen={showAutoSuccessModal}
//           onClose={() => setShowAutoSuccessModal(false)}
//           autoCloseTime={3000} // Fecha automaticamente após 3 segundos
//         />
//       )}

//       {/* Modal de Alerta (Auto-close) */}
//       {showAutoWarningModal && (
//         <Modal
//           type="warning"
//           title="Alerta"
//           message="Este é um aviso temporário. O modal fechará automaticamente."
//           isOpen={showAutoWarningModal}
//           onClose={() => setShowAutoWarningModal(false)}
//           autoCloseTime={3000} // Fecha automaticamente após 3 segundos
//         />
//       )}

//       {/* Modal de Perigo (Auto-close) */}
//       {showAutoDangerModal && (
//         <Modal
//           type="danger"
//           title="Perigo"
//           message="Atenção! Este é um alerta crítico. Fechará automaticamente."
//           isOpen={showAutoDangerModal}
//           onClose={() => setShowAutoDangerModal(false)}
//           autoCloseTime={3000} // Fecha automaticamente após 3 segundos
//         />
//       )}

//       {/* Modal de Informação (Auto-close) */}
//       {showAutoInfoModal && (
//         <Modal
//           type="info"
//           title="Informação"
//           message="Esta é uma mensagem informativa temporária."
//           isOpen={showAutoInfoModal}
//           onClose={() => setShowAutoInfoModal(false)}
//           autoCloseTime={3000} // Fecha automaticamente após 3 segundos
//         />
//       )}
//     </div>
//   );
// };

// export default App;

// export default function Home() {
//   return <></>;
import CardNovaSenha from '@/components/CardNovaSenha';

export default function Home() {
  return (
    <div className="w-2/5 h-2/5">
      <CardNovaSenha />
    </div>
  );
}
