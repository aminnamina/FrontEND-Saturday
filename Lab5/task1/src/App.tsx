import { PersonCard } from './components/PersonCard';
import { AbilityList } from './components/AbilityList';
import { Person, Ability } from './types';

const demoUser: Person = {
  fullName: 'Иван Петров',
  emailAddress: 'ivan.petrov@example.com',
  yearsOld: 27
};

const userSkills: Ability[] = [
  { abilityId: 1, abilityName: 'React', proficiencyLevel: 'Master' },
  { abilityId: 2, abilityName: 'TypeScript', proficiencyLevel: 'Competent' },
  { abilityId: 3, abilityName: 'Node.js', proficiencyLevel: 'Novice' }
];

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Профиль пользователя</h1>
      <PersonCard personData={demoUser} isOnline={true}>
        <p style={{ color: '#666' }}>Статус: Активен</p>
        <h3>Навыки:</h3>
        <AbilityList abilities={userSkills} />
      </PersonCard>
    </div>
  );
}

export default App;