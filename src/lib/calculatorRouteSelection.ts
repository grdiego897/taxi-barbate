export type CalculatorPlace =
  | 'Barbate'
  | 'Zahara de los Atunes'
  | 'Canos de Meca'
  | 'Malaga Airport'
  | 'Seville Airport'
  | 'Jerez Airport'
  | 'San Fernando-Bahia Sur'
  | 'Cadiz Station'
  | 'Algeciras Station'
  | 'Jerez de la Frontera Station'
  | 'Seville-Santa Justa Station'
  | 'Cadiz'
  | 'Malaga'
  | 'Seville'
  | 'Jerez de la Frontera'
  | 'Atlanterra'
  | 'Algeciras'
  | 'San Fernando'
  | 'Conil de la Frontera'
  | 'Vejer de la Frontera'
  | 'Montenmedio';

export type CalculatorRouteSelection = {
  origin: CalculatorPlace;
  destination: CalculatorPlace;
};

export const CALCULATOR_ROUTE_SELECTED_EVENT = 'calculator-route-selected';
