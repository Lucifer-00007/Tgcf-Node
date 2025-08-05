import {
  LayoutDashboard,
  User,
  KeyRound,
  ShieldCheck,
  Link,
  Plug,
  PlayCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { Page } from './types';

export const NAV_ITEMS = [
  { name: Page.Dashboard, icon: LayoutDashboard },
  { name: Page.Profile, icon: User },
  { name: Page.Credentials, icon: KeyRound },
  { name: Page.Admins, icon: ShieldCheck },
  { name: Page.Connections, icon: Link },
  { name: Page.Plugins, icon: Plug },
  { name: Page.Run, icon: PlayCircle },
  { name: Page.Advanced, icon: SlidersHorizontal },
];