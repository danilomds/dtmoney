import * as S from './styles';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <S.Container>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <S.TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
        />

        <button type="submit" >
          Cadastrar
        </button>
      </S.Container>

    </Modal>

  )
}