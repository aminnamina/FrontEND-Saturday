import { useState } from 'react';

export default function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateName = (value) => {
    if (!value.trim()) return 'Имя обязательно';
    if (value.length < 2) return 'Минимум 2 символа';
    return '';
  };

  const validateEmail = (value) => {
    if (!value.trim()) return 'Email обязателен';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Неверный формат email';
    return '';
  };

  const validateAge = (value) => {
    if (!value) return 'Возраст обязателен';
    const num = Number(value);
    if (isNaN(num)) return 'Должно быть числом';
    if (num < 18) return 'Минимум 18 лет';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err1 = validateName(userName);
    const err2 = validateEmail(userEmail);
    const err3 = validateAge(userAge);

    setNameError(err1);
    setEmailError(err2);
    setAgeError(err3);

    if (err1 || err2 || err3) return;

    setIsSuccess(true);
    setUserName('');
    setUserEmail('');
    setUserAge('');
  };

  return (
    <div style={{
      maxWidth: '420px',
      margin: '60px auto',
      padding: '32px',
      backgroundColor: '#fafafa',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      fontFamily: 'Helvetica Neue, Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '400',
        color: '#212121',
        marginBottom: '24px',
        textAlign: 'center',
        letterSpacing: '0.5px'
      }}>
        Регистрация
      </h2>

      {isSuccess && (
        <div style={{
          padding: '12px 16px',
          backgroundColor: '#e8f5e9',
          color: '#2e7d32',
          borderRadius: '4px',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          Регистрация успешно завершена
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            color: '#757575',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Имя
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setNameError(validateName(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: '16px',
              border: 'none',
              borderBottom: `2px solid ${nameError ? '#d32f2f' : '#bdbdbd'}`,
              backgroundColor: 'transparent',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
          />
          {nameError && (
            <span style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px', display: 'block' }}>
              {nameError}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            color: '#757575',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Email
          </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setEmailError(validateEmail(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: '16px',
              border: 'none',
              borderBottom: `2px solid ${emailError ? '#d32f2f' : '#bdbdbd'}`,
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
          {emailError && (
            <span style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px', display: 'block' }}>
              {emailError}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '28px' }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            color: '#757575',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Возраст
          </label>
          <input
            type="number"
            value={userAge}
            onChange={(e) => {
              setUserAge(e.target.value);
              setAgeError(validateAge(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: '16px',
              border: 'none',
              borderBottom: `2px solid ${ageError ? '#d32f2f' : '#bdbdbd'}`,
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
          {ageError && (
            <span style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px', display: 'block' }}>
              {ageError}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#212121',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}