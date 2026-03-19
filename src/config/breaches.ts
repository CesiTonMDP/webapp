// Configuration des fuites de données récentes
// Recent data breach configuration
//
// Champs disponibles / Available fields:
//   company   : Nom de l'entreprise / Company name
//   date      : Date de la fuite (YYYY-MM-DD) / Breach date
//   records   : Nombre d'enregistrements compromis / Number of compromised records
//   dataTypes : Types de données exposées / Types of exposed data
//   country   : Pays de l'entreprise / Company country (optional)
//   source    : URL vers la source / Source URL (optional)

export interface BreachEntry {
  company: string;
  date: string;
  records: number;
  dataTypes: string[];
  country?: string;
  source?: string;
}

export const recentBreaches: BreachEntry[] = [
  {
    company: 'Free',
    date: '2024-10-21',
    records: 19200000,
    dataTypes: ['email', 'nom', 'adresse', 'téléphone', 'IBAN'],
    country: 'France',
    source: 'https://www.numerama.com/cyberguerre/1835895-free-confirme-une-cyberattaque-et-une-fuite-de-donnees-de-ses-abonnes.html',
  },
  {
    company: 'SFR',
    date: '2024-09-05',
    records: 3600000,
    dataTypes: ['email', 'nom', 'adresse', 'téléphone'],
    country: 'France',
    source: 'https://www.numerama.com/cyberguerre/1788879-sfr-confirme-une-fuite-de-donnees-de-36-millions-dabonnes.html',
  },
  {
    company: 'Viamedis',
    date: '2024-02-01',
    records: 33000000,
    dataTypes: ['email', 'date de naissance', 'numéro de sécurité sociale', 'mutuelle'],
    country: 'France',
    source: 'https://www.cnil.fr/fr/violation-de-donnees-de-viamedis-et-almerys-les-points-cles',
  },
  {
    company: 'Almerys',
    date: '2024-02-05',
    records: 33000000,
    dataTypes: ['email', 'date de naissance', 'numéro de sécurité sociale', 'mutuelle'],
    country: 'France',
    source: 'https://www.cnil.fr/fr/violation-de-donnees-de-viamedis-et-almerys-les-points-cles',
  },
  {
    company: 'France Travail (Pôle Emploi)',
    date: '2024-03-13',
    records: 43000000,
    dataTypes: ['nom', 'prénom', 'date de naissance', 'numéro de sécurité sociale', 'email', 'téléphone'],
    country: 'France',
    source: 'https://www.cnil.fr/fr/france-travail-pole-emploi-violation-de-donnees',
  },
  {
    company: 'Molotov',
    date: '2023-11-01',
    records: 10000000,
    dataTypes: ['email', 'mot de passe', 'nom'],
    country: 'France',
  },
  {
    company: 'Boulanger',
    date: '2024-09-01',
    records: 27000000,
    dataTypes: ['email', 'nom', 'adresse', 'téléphone'],
    country: 'France',
  },
];
