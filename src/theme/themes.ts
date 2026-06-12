import type { BeezTheme } from './theme-types'

export const beezThemes: BeezTheme[] = [
  {
    id: 'beez',
    name: 'Beez Core',
    app: 'Ecosystem',
    primary: '#F6B73C',
    accent: '#FFD76A',
    description: 'Honey/amber premium para el ADN base.',
    useCase: 'Marca base, modulos core, documentacion y superficies compartidas.',
  },
  {
    id: 'gravity',
    name: 'Gravity',
    app: 'Operations',
    primary: '#FF6B35',
    accent: '#B6F04A',
    description: 'Ember energetico con senal lime.',
    useCase: 'Operaciones, eventos, movimiento, alertas y actividad en tiempo real.',
  },
  {
    id: 'bmmanager',
    name: 'BMManager',
    app: 'Management',
    primary: '#2DD4BF',
    accent: '#38BDF8',
    description: 'Cyan tactico con lectura operativa.',
    useCase: 'Gestion tactica, deporte, salud, equipos y seguimiento operativo.',
  },
  {
    id: 'flow',
    name: 'Flow',
    app: 'Productivity',
    primary: '#8B5CF6',
    accent: '#6366F1',
    description: 'Violet/blue para foco y cadencia.',
    useCase: 'Productividad, automatizacion, flujos de trabajo y handoffs.',
  },
  {
    id: 'beezid',
    name: 'BeezID',
    app: 'Identity',
    primary: '#3B82F6',
    accent: '#34D399',
    description: 'Blue/mint para confianza y seguridad.',
    useCase: 'Identidad, acceso, seguridad, sesiones y confianza transversal.',
  },
]

export const defaultTheme = beezThemes[0]
