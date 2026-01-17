export interface SkillBreakdownProps {
  name: string;
  color: string;
  accentColor?: string;
  experience: number;
  use: string;
  years: number;
  desc: string;
  icon: string;
  type: string;
  close?: () => void;
}
