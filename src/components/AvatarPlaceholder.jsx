import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
import { useMemo } from 'react';

// Colores por tema para mantener coherencia visual
const THEME_COLORS = {
  oscuro: {
    background: ['1a1a23'],
    textColor: ['a78bfa'],
  },
  claro: {
    background: ['ffffff'],
    textColor: ['065f46'],
  }
};

// Recibe el tema como prop desde Hero para reaccionar al cambio inmediatamente
const AvatarPlaceholder = ({ theme }) => {
  const colors = THEME_COLORS[theme] || THEME_COLORS.oscuro;

  // useMemo para regenerar el avatar solo cuando cambia el tema
  const svgString = useMemo(() => {
    return createAvatar(initials, {
      seed: 'WL',
      scale: 50,
      radius: 10,
      backgroundType: ['solid'],
      backgroundColor: colors.background,
      textColor: colors.textColor,
    }).toString();
  }, [theme]);

  return (
    <div
      className="hero-img avatar-placeholder"
      aria-label="Avatar de Wilker Lopez"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
};

export default AvatarPlaceholder;
