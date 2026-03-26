export interface Vehicle {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  gallery: string[];
  type: 'auto' | 'moto';
  specs: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
}

export const AUTOS: Vehicle[] = [
  {
    id: 1,
    name: "Nissan Tsuru 2014",
    price: 85000,
    description: "Un clasico que nunca muere. Economico y aguantador. Color blanco taxi.",
    image: "/tsuru.png",
    gallery: [
      "/tsuru.png",
      "/tsuru.png",
      "/tsuru.png"
    ],
    type: 'auto',
    specs: ["Motor 1.6", "Manual", "Sin aire acondicionado"]
  },
  {
    id: 2,
    name: "Toyota Corolla 2022",
    price: 450000,
    description: "Casi nuevo, huele a nuevo. Muy seguro y confiable.",
    image: "/corolla.png",
    gallery: [
      "/corolla.png",
      "/corolla.png",
      "/corolla.png"
    ],
    type: 'auto',
    specs: ["Automatico", "Pantalla touch", "Camara de reversa"]
  },
  {
    id: 3,
    name: "Ford Mustang GT 2020",
    price: 950000,
    description: "Para los que les gusta la velocidad. Motor V8 potente.",
    image: "/mustang.png",
    gallery: [
      "/mustang.png",
      "/mustang.png",
      "/mustang.png"
    ],
    type: 'auto',
    specs: ["V8 5.0L", "Piel", "Rines 19 pulgadas"]
  }
];

export const MOTOS: Vehicle[] = [
  {
    id: 4,
    name: "Italika FT150",
    price: 18000,
    description: "La de batalla. Ideal para el trabajo o repartir comida.",
    image: "/italika.png",
    gallery: [
      "/italika.png",
      "/italika.png",
      "/italika.png"
    ],
    type: 'moto',
    specs: ["150cc", "Rendimiento 32km/l", "Freno de tambor"]
  },
  {
    id: 5,
    name: "Kawasaki Ninja 400",
    price: 145000,
    description: "Deportiva y rapida. Color verde llamativo.",
    image: "/ninja.png",
    gallery: [
      "/ninja.png",
      "/ninja.png",
      "/ninja.png"
    ],
    type: 'moto',
    specs: ["Bicilindrica", "ABS", "Tablero digital"]
  },
  {
    id: 6,
    name: "Harley Davidson Iron 883",
    price: 280000,
    description: "Estilo puro. Sonido inconfundible.",
    image: "/harley.png",
    gallery: [
      "/harley.png",
      "/harley.png",
      "/harley.png"
    ],
    type: 'moto',
    specs: ["Motor Evolution", "Negro mate", "Asiento individual"]
  }
];

export const SERVICES: Service[] = [
  { id: 1, title: "Hojalateria y Pintura", description: "Dejamos tu carro como nuevo despues del choque.", price: "Desde $2000" },
  { id: 2, title: "Reparacion de Motor", description: "Si ya no arranca, nosotros lo arreglamos.", price: "Cotizacion previa" },
  { id: 3, title: "Mantenimiento General", description: "Cambio de aceite, filtros y revision de frenos.", price: "$1200" }
];
