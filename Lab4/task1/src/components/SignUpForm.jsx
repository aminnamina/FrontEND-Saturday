import {useState} from "react";
export default function SignUpForm() {
    const [fullName, setFullName] = useState('');
    const [mailAddr, setmailAddr] = useState('');
    const [yearsOld, setYearsOld] = useState('');

    const [nameFail, setNameFail] = useState('');
    const [mailFail, setMailFail] = useState('');
    const [ageFail, setAgeFail] = useState('');

    const [done, setDone] = useState(false);

    const checkName = (val) => {
        if (!val.trim()) return 'Имя обязательно' ;
        if (!val.length < 2) return 'Минимум 2 буквы' ;
        return '' ;
    };

    const checkMail = (val) => {
        if (!val.trim()) return 'Почта обязательна' ;
        if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(val)) return 'Неверный формат почты';
        return '' ;
    };
    const checkAge= (val) => {
        if (!val) return 'Возраст обязателен' ;
        if (isNaN(val)) return 'Только числа' ;
        if (Number(val) < 18) return 'Только с 18-ти лет'
        return '' ;
    };
    const sendForm = (e) => {
        e.preventDefault();
        const err1 = checkName(fullName);
        const err2 = checkMail(mailAddr);
        const err3 = checkAge(yearsOld);

        setNameFail(err1);
        setMailFail(err2);
        setAgeFail(err3);

        if (err1 || err2 || err3 ) return;

        setDone(true);
        setFullName('');
        setmailAddr('');
        setYearsOld('');
    };
     return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)'
    }}>
      <h2 style={{ color: '#38bdf8', marginTop: 0, textAlign: 'center' }}>
        Регистрация
      </h2>

      {done && (
        <p style={{ color: '#4ade80', textAlign: 'center', fontWeight: 'bold' }}>
          Регистрация успешна!
        </p>
      )}

      <form onSubmit={sendForm}>
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setNameFail(checkName(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: `2px solid ${nameFail ? '#ef4444' : '#334155'}`,
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              boxSizing: 'border-box'
            }}
          />
          {nameFail && <span style={{ color: '#ef4444', fontSize: '13px' }}>{nameFail}</span>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <input
            type="email"
            placeholder="Email адрес"
            value={mailAddr}
            onChange={(e) => {
              setMailAddr(e.target.value);
              setMailFail(checkMail(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: `2px solid ${mailFail ? '#ef4444' : '#334155'}`,
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              boxSizing: 'border-box'
            }}
          />
          {mailFail && <span style={{ color: '#ef4444', fontSize: '13px' }}>{mailFail}</span>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="number"
            placeholder="Возраст"
            value={yearsOld}
            onChange={(e) => {
              setYearsOld(e.target.value);
              setAgeFail(checkAge(e.target.value));
            }}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: `2px solid ${ageFail ? '#ef4444' : '#334155'}`,
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              boxSizing: 'border-box'
            }}
          />
          {ageFail && <span style={{ color: '#ef4444', fontSize: '13px' }}>{ageFail}</span>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}