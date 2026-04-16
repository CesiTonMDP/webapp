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
    company: 'E-campus (Police Nationale)',
    date: '2026-04-15',
    records: 176000,
    dataTypes: ['email', 'nom', 'prénom', 'adresse', "Informations de compte Police"],
    country: 'France',
    source: 'https://frenchbreaches.com/alertes/e-campus-police-nationale--mo0ah8spmz9fiiyowa',
  },
  {
    company: 'Basic Fit',
    date: '2026-04-13',
    records: 1000000,
    dataTypes: ['email', 'nom', 'prénom', 'adresse', "RIB/IBAN"],
    country: 'France',
    source: 'https://frenchbreaches.com/alertes/basic-fit-mnwz7351s4inuhnn5b',
  },
  {
    company: 'KFC',
    date: '2026-04-07',
    records: 1000000,
    dataTypes: ['email', 'nom', 'prénom', 'Téléphone', "Informations de compte fidélité"],
    country: 'France',
    source: 'https://frenchbreaches.com/alertes/kfc-france-mnro510z9e1zrnvv2y8,
  },
  {
    company: 'Direction Générale des Finances Publiques',
    date: '2026-02-18',
    records: 1200000,
    dataTypes: ['email', 'nom', 'prénom', 'adresse', 'numéro fiscal', "RIB/IBAN"],
    country: 'France',
    source: 'https://frenchbreaches.com/alertes/direction-g-n-rale-des-finances-publiques-mlsb563td3sb6g2voxn',
  },
  {
    company: 'Stych',
    date: '2026-03-08',
    records: 1300000,
    dataTypes: ['email', 'adresse', 'nom', 'prénom', 'telephone'],
    country: 'France',
    source: 'https://www.zataz.com/1-million-de-comptes-stych-pirates/',
  },
  {
    company: 'Fédération Française de Rugby',
    date: '2026-03-17',
    records: 530000,
    dataTypes: ['email', 'nom', 'prénom', 'date de naissance', 'numéro de licence'],
    country: 'France',
    source: 'https://frenchbreaches.com/blog/piratage-federation-francaise-de-rugby-530-000-licencies-concernes-photos-de-mineurs-et-cni-exposees',
  },
  {
    company: 'Free',
    date: '2025-10-21',
    records: 19200000,
    dataTypes: ['email', 'nom', 'adresse', 'téléphone', 'IBAN'],
    country: 'France',
  },
  {
    company: 'SFR',
    date: '2024-09-05',
    records: 3600000,
    dataTypes: ['email', 'nom', 'adresse', 'téléphone'],
    country: 'France',
  },
  {
    company: 'Viamedis',
    date: '2024-02-01',
    records: 33000000,
    dataTypes: ['email', 'date de naissance', 'numéro de sécurité sociale', 'mutuelle'],
    country: 'France',
  },
  {
    company: 'Almerys',
    date: '2024-02-05',
    records: 33000000,
    dataTypes: ['email', 'date de naissance', 'numéro de sécurité sociale', 'mutuelle'],
    country: 'France',
  },
  {
    company: 'France Travail (Pôle Emploi)',
    date: '2024-03-13',
    records: 43000000,
    dataTypes: ['nom', 'prénom', 'date de naissance', 'numéro de sécurité sociale', 'email', 'téléphone'],
    country: 'France',
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
