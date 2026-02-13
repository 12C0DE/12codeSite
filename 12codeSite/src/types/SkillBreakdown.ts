export interface SkillBreakdownProps {
  name: string;
  color: string;
  accentColor?: string;
  textColor?: string;
  borderColor?: string;
  desc: string;
  icon: string;
  experience: number;
  use: string;
  years: number;
  type: string;
  isSelected?: boolean;
  cardIndex?: number;
  close?: () => void;
  isMobile?: boolean;
}
