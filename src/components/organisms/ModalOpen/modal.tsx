import React, { useRef } from 'react';
import CloseButton from '../../atoms/close';
import styles from './modal.module.css';
import OutsideClickHandler from '../hooks/outsideClickClose';
import AddInputButton from '../../organisms/hooks/AddInputButton';
import MinusInputButton from '../../organisms/hooks/MinusInputButton';
import useLocalStorage from '../hooks/uselocalStorage';

interface ModalProps {
  onClose: () => void;
  modalKey: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, modalKey }) => {
  const [inputs, setInputs] = useLocalStorage(modalKey, []);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const lastFocusedRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={styles.moDal}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className={styles.ModalForm}>
          <div className={styles.InputTotalSpace}>
            {inputs.map((input: string, index: number) => (
              <div key={index} className={styles.InputTotal}>
                <input
                  type="text"
                  value={input}
                  ref={el => {
                    inputRefs.current[index] = el;
                  }}
                  onFocus={(e) => {
                    lastFocusedRef.current = e.target;
                  }}
                  onChange={(e) => {
                    const newInputs = [...inputs];
                    newInputs[index] = e.target.value;
                    setInputs(newInputs);
                  }}
                />
              </div>
            ))}
          </div>
          <div className={styles.ButtonArea}>
            <div className={styles.OnlyEdit}>
              <AddInputButton onAdd={() => setInputs([...inputs, ''])} />
              <MinusInputButton inputs={inputs} setInputs={setInputs} inputRefs={inputRefs} lastFocusedRef={lastFocusedRef} />
            </div>
            <div className={styles.OnlyClose}>
              <CloseButton onClick={onClose} />
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;