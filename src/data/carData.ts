export interface CarModel {
  name: string
}

export interface CarBrand {
  brand: string
  models: string[]
}

export const carDatabase: CarBrand[] = [
  {
    brand: 'Audi',
    models: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'e-tron', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  },
  {
    brand: 'BMW',
    models: ['1 серия', '2 серия', '3 серия', '4 серия', '5 серия', '6 серия', '7 серия', '8 серия', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'i3', 'i4', 'i7', 'M2', 'M3', 'M4', 'M5', 'M8', 'Z4'],
  },
  {
    brand: 'Mercedes-Benz',
    models: ['A-Class', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'AMG GT'],
  },
  {
    brand: 'Toyota',
    models: ['Auris', 'Avensis', 'C-HR', 'Camry', 'Corolla', 'Crown', 'Fortuner', 'GR86', 'Highlander', 'Land Cruiser', 'Land Cruiser Prado', 'Prius', 'RAV4', 'Rush', 'Sequoia', 'Sienna', 'Supra', 'Tundra', 'Venza', 'Yaris'],
  },
  {
    brand: 'Honda',
    models: ['Accord', 'Civic', 'CR-V', 'CR-Z', 'Element', 'Fit', 'HR-V', 'Insight', 'Jazz', 'Legend', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', 'ZR-V'],
  },
  {
    brand: 'Hyundai',
    models: ['Accent', 'Creta', 'Elantra', 'Grandeur', 'i10', 'i20', 'i30', 'i40', 'IONIQ', 'IONIQ 5', 'IONIQ 6', 'Kona', 'Nexo', 'Palisade', 'Santa Cruz', 'Santa Fe', 'Solaris', 'Sonata', 'Staria', 'Tucson', 'Veloster'],
  },
  {
    brand: 'Kia',
    models: ['Carnival', 'Ceed', 'EV6', 'K5', 'K8', 'K9', 'Niro', 'Picanto', 'ProCeed', 'Rio', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Telluride', 'XCeed'],
  },
  {
    brand: 'Volkswagen',
    models: ['Arteon', 'Atlas', 'Golf', 'ID.3', 'ID.4', 'ID.5', 'ID.6', 'Jetta', 'Passat', 'Polo', 'Sharan', 'T-Cross', 'T-Roc', 'Taos', 'Tiguan', 'Touareg', 'Touran', 'Up'],
  },
  {
    brand: 'Skoda',
    models: ['Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Rapid', 'Scala', 'Superb', 'Yeti'],
  },
  {
    brand: 'Ford',
    models: ['Bronco', 'Edge', 'Escape', 'Expedition', 'Explorer', 'F-150', 'Focus', 'Fusion', 'Maverick', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Puma', 'Ranger', 'Territory'],
  },
  {
    brand: 'Nissan',
    models: ['370Z', 'Altima', 'Ariya', 'Frontier', 'GT-R', 'Juke', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Navara', 'Note', 'Pathfinder', 'Patrol', 'Qashqai', 'Rogue', 'Sentra', 'Teana', 'Titan', 'X-Trail', 'Z'],
  },
  {
    brand: 'Mazda',
    models: ['CX-3', 'CX-30', 'CX-5', 'CX-50', 'CX-60', 'CX-9', 'Mazda2', 'Mazda3', 'Mazda6', 'MX-30', 'MX-5'],
  },
  {
    brand: 'Mitsubishi',
    models: ['ASX', 'Eclipse Cross', 'L200', 'Outlander', 'Outlander PHEV', 'Pajero', 'Pajero Sport'],
  },
  {
    brand: 'Subaru',
    models: ['BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'Solterra', 'WRX'],
  },
  {
    brand: 'Suzuki',
    models: ['Baleno', 'Celerio', 'Grand Vitara', 'Ignis', 'Jimny', 'Swift', 'SX4', 'Vitara'],
  },
  {
    brand: 'Lexus',
    models: ['CT', 'ES', 'GS', 'GX', 'IS', 'LC', 'LM', 'LS', 'LX', 'NX', 'RC', 'RX', 'TX', 'UX'],
  },
  {
    brand: 'Infiniti',
    models: ['Q30', 'Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX55', 'QX60', 'QX80'],
  },
  {
    brand: 'Volvo',
    models: ['C40', 'EX30', 'EX40', 'EX90', 'S60', 'S90', 'V40', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
  },
  {
    brand: 'Land Rover',
    models: ['Defender', 'Discovery', 'Discovery Sport', 'Freelander', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover Velar'],
  },
  {
    brand: 'Jeep',
    models: ['Cherokee', 'Commander', 'Compass', 'Gladiator', 'Grand Cherokee', 'Grand Wagoneer', 'Renegade', 'Wrangler'],
  },
  {
    brand: 'Porsche',
    models: ['718 Boxster', '718 Cayman', '911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  },
  {
    brand: 'Chevrolet',
    models: ['Blazer', 'Camaro', 'Colorado', 'Corvette', 'Equinox', 'Express', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Traverse', 'Trailblazer', 'Trax'],
  },
  {
    brand: 'Peugeot',
    models: ['108', '2008', '208', '3008', '308', '408', '5008', '508', 'e-208', 'e-2008', 'Rifter', 'Traveller'],
  },
  {
    brand: 'Renault',
    models: ['Arkana', 'Austral', 'Captur', 'Clio', 'Duster', 'Espace', 'Kadjar', 'Kangoo', 'Koleos', 'Logan', 'Megane', 'Sandero', 'Scenic', 'Trafic', 'Zoe'],
  },
  {
    brand: 'Opel',
    models: ['Astra', 'Corsa', 'Crossland', 'Grandland', 'Insignia', 'Mokka', 'Vivaro', 'Zafira'],
  },
  {
    brand: 'LADA',
    models: ['Granta', 'Kalina', 'Largus', 'Niva Legend', 'Niva Travel', 'Vesta', 'XRAY'],
  },
  {
    brand: 'Chery',
    models: ['Arrizo 5', 'Arrizo 6', 'Arrizo 8', 'Exeed LX', 'Exeed RX', 'Exeed TXL', 'Exeed VX', 'Tiggo 4', 'Tiggo 4 Pro', 'Tiggo 7', 'Tiggo 7 Pro', 'Tiggo 8', 'Tiggo 8 Pro'],
  },
  {
    brand: 'Geely',
    models: ['Atlas Pro', 'Coolray', 'Emgrand', 'Monjaro', 'Okavango', 'Preface', 'Tugella'],
  },
  {
    brand: 'Haval',
    models: ['Dargo', 'F7', 'F7x', 'H6', 'H9', 'Jolion', 'M6'],
  },
  {
    brand: 'GAC',
    models: ['Aion S', 'Aion V', 'Emkoo', 'Empow', 'GN6', 'GN8', 'GS3', 'GS4', 'GS5', 'GS7', 'GS8'],
  },
  {
    brand: 'Tesla',
    models: ['Cybertruck', 'Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'],
  },
  {
    brand: 'BYD',
    models: ['Atto 3', 'Dolphin', 'Han', 'Seal', 'Song Plus', 'Tang'],
  },
  {
    brand: 'Alfa Romeo',
    models: ['Giulia', 'Giulietta', 'Mito', 'Stelvio', 'Tonale'],
  },
  {
    brand: 'Jaguar',
    models: ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF'],
  },
  {
    brand: 'Maserati',
    models: ['Ghibli', 'GranTurismo', 'Grecale', 'Levante', 'MC20', 'Quattroporte'],
  },
  {
    brand: 'Cadillac',
    models: ['CT4', 'CT5', 'Escalade', 'LYRIQ', 'XT4', 'XT5', 'XT6'],
  },
  {
    brand: 'GMC',
    models: ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
  },
]

export const carBrands = carDatabase.map((item) => item.brand)

export function getModelsByBrand(brand: string): string[] {
  const found = carDatabase.find((item) => item.brand === brand)
  return found ? found.models : []
}
