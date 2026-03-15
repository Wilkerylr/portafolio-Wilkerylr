import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';

// Genera el avatar con DiceBear usando las iniciales de Wilker Lopez
const avatar = createAvatar(initials, {
  seed: 'wL',
  scale: 50,
  radius: 10,
  backgroundType: ['gradientLinear'],
});

const svgString = avatar.toString();

// Componente que renderiza el avatar generado por DiceBear
const AvatarPlaceholder = () => (
  <div
    className="hero-img avatar-placeholder"
    aria-label="Avatar de Wilker Lopez"
    dangerouslySetInnerHTML={{ __html: svgString }}
  />
);

export default AvatarPlaceholder;
