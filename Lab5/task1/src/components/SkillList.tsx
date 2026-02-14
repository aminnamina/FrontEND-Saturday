import { Ability, Proficiency } from '../types';

interface AbilityListProps {
  abilities: Ability[];
}

const getBadgeColor = (level: Proficiency): string => {
  const colorMap: Record<Proficiency, string> = {
    'Novice': '#28a745',
    'Competent': '#fd7e14',
    'Master': '#dc3545'
  };
  return colorMap[level];
};

export const AbilityList = ({ abilities }: AbilityListProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {abilities.map((item) => (
        <li
          key={item.abilityId}
          style={{
            color: getBadgeColor(item.proficiencyLevel),
            padding: '5px 0',
            fontWeight: 'bold'
          }}
        >
          {item.abilityName} — {item.proficiencyLevel}
        </li>
      ))}
    </ul>
  );
};