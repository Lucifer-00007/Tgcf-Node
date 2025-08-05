export enum Page {
  Dashboard = 'Dashboard',
  Profile = 'Profile',
  Credentials = 'Credentials',
  Admins = 'Admins',
  Connections = 'Connections',
  Plugins = 'Plugins',
  Run = 'Run',
  Advanced = 'Advanced',
}

export interface Connection {
  id: number;
  name: string;
  enabled: boolean;
  source: string;
  destinations: string;
  offset: string;
  end: string;
}