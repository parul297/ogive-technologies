export const colors = {
  surface: {
    page: '#FFFFFF',
    sidebar: '#F9FAFB',
    card: '#FFFFFF',
    muted: '#F3F4F6'
  },

  border: {
    subtle: '#E5E7EB',
    strong: '#D1D5DB'
  },

  text: {
    primary: '#111827',
    secondary: '#6B7280',
    muted: '#9CA3AF',
    inverse: '#FFFFFF'
  },

  accent: {
    primary: '#475569',
    hover: '#334155'
  },

  state: {
    success: '#4B5563',
    warning: '#6B7280',
    danger: '#7C2D12'
  },

  icon: {
    default: '#6B7280',
    active: '#111827',
    muted: '#9CA3AF'
  },

  progress: {
    track: '#E5E7EB',
    fill: '#475569'
  }
};

export const rgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default colors;
