export default function Draftedguy({ draftedguy }) {
  return (
    <div className="item">
      <div>{draftedguy.name}</div>
      <div>HP: {draftedguy.hp}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Special Ability: {draftedguy.abilityname}</div>
    </div>
  );
}
