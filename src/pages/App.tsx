import React, { useState } from 'react';
import Month from '../components/molecules/month/index';
import { months } from '../components/atoms/monthdata/MonthData';
import './App.css';
import EditButton from '../components/organisms/Edit/edit';
import { useEditMode } from '../components/organisms/hooks/useEditMode';
import Modal from '../components/organisms/ModalOpen/modal';
import { useModal } from '../components/organisms/hooks/useModal';
import BackgroundClickHandler from '../components/organisms/hooks/backgroundClickModalClose';
import SummaryContainer from '../components/templates/summaryContainer';

const App: React.FC = () => {
  const { isEditing, toggleEditMode, setEditMode } = useEditMode();
  const { isOpen, openModal, closeModal, modalKey } = useModal();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <BackgroundClickHandler onBackgroundClick={() => setEditMode(false)}>
      <div className="App">
        <div className="layout">
        <header>
          <input
            type="text"
            id="search"
            placeholder="조회"
            value={searchText}
            onChange={handleSearch}
          />
          <EditButton
            onEditClick={() => openModal('header')}
            onEditModeToggle={toggleEditMode}
            isEditing={isEditing}
          />
        </header>
        <main>
          {months.map((month) => (
            <Month
              key={month.name}
              month={month}
              isEditing={isEditing}
              onDayClick={(dayKey) => openModal(dayKey)}
              isModalOpen={isOpen}
              searchText={searchText}
            />
          ))}
        </main>
        {isOpen && modalKey && <Modal onClose={closeModal} modalKey={modalKey} />}
        </div>
        <SummaryContainer />
      </div>
    </BackgroundClickHandler>
  );
};

export default App;