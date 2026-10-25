import type { Paradigm } from './types';
import { genericAi } from './00-generic-ai';
import { bento } from './01-bento';
import { swiss } from './02-swiss';
import { neoBrutalism } from './03-neo-brutalism';
import { glass } from './04-glassmorphism';
import { editorial } from './05-editorial';
import { terminal } from './06-terminal';
import { dashboard } from './07-dark-dashboard';
import { wa } from './08-japanese-minimal';
import { y2k } from './09-y2k';
import { deco } from './10-art-deco';
import { skeuo } from './11-skeuomorphic';
import { zine } from './12-paper-zine';
import { bauhaus } from './13-bauhaus';
import { memphis } from './14-memphis';
import { cyberpunk } from './15-cyberpunk';
import { clay } from './16-clay';
import { handdrawn } from './17-handdrawn';
import { pixel } from './18-pixel';
import { vaporwave } from './19-vaporwave';
import { orientalInk } from './20-oriental-ink';
import { constructivism } from './21-constructivism';
import { artNouveau } from './22-art-nouveau';
import { frutigerAero } from './23-frutiger-aero';
import { neumorphism } from './24-neumorphism';
import { risograph } from './25-risograph';
import { gothicManuscript } from './26-gothic-manuscript';
import { kawaii } from './27-kawaii';

export const paradigms: Paradigm[] = [
  genericAi,
  bento,
  swiss,
  neoBrutalism,
  glass,
  editorial,
  terminal,
  dashboard,
  wa,
  y2k,
  deco,
  skeuo,
  zine,
  bauhaus,
  memphis,
  cyberpunk,
  clay,
  handdrawn,
  pixel,
  vaporwave,
  orientalInk,
  constructivism,
  artNouveau,
  frutigerAero,
  neumorphism,
  risograph,
  gothicManuscript,
  kawaii,
];

export function getParadigm(id: string | undefined): Paradigm | undefined {
  return paradigms.find((p) => p.id === id);
}
