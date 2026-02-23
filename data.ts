import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'mansao',
    title: 'MANSÃO MAROMBA & COMBOS SIMPLES',
    items: [
      { name: 'Combo Whisky', price: 'R$ 25,00' },
      { name: 'Combo Gin de Melancia', price: 'R$ 25,00' },
      { name: 'Adicional de Gelo e Limão', price: '+ R$ 3,00' },
    ]
  },
  {
    id: 'doses-whisky',
    title: 'DOSES - WHISKY',
    items: [
      { name: "Buchanan's", price: 'R$ 55,00' },
      { name: 'Chivas / Old Parr / Jack Daniels (Sabor)', price: 'R$ 45,00' },
      { name: 'Jack Daniels (Tradicional)', price: 'R$ 40,00' },
      { name: 'Ballantines / Red Label / B&W', price: 'R$ 35,00' },
      { name: 'Passaport / White Horse', price: 'R$ 30,00' },
      { name: 'Chanceler', price: 'R$ 12,00' },
      { name: 'Mastergold', price: 'R$ 10,00' },
    ]
  },
  {
    id: 'doses-gin',
    title: 'DOSES - GIN',
    items: [
      { name: 'Tanqueray', price: 'R$ 50,00' },
      { name: 'Beefeater', price: 'R$ 45,00' },
      { name: 'Eternity (Sabor)', price: 'R$ 18,00' },
      { name: 'Eternity (Tradicional)', price: 'R$ 15,00' },
      { name: 'Full London', price: 'R$ 10,00' },
    ]
  },
  {
    id: 'doses-outros',
    title: 'DOSES - VODKA & OUTROS',
    items: [
      { name: 'Licor 43', price: 'R$ 35,00' },
      { name: 'Smirnoff / Malibu', price: 'R$ 25,00' },
      { name: 'Askov', price: 'R$ 15,00' },
      { name: 'Smirnoff Ice (Garrafa)', price: 'R$ 13,00' },
      { name: 'Dreher', price: 'R$ 6,00' },
      { name: 'Velho Barreiro', price: 'R$ 5,00' },
      { name: 'Cachaça 51', price: 'R$ 4,00' },
      { name: 'Adição de Red Bull', price: '+ R$ 5,00' },
    ]
  },
  {
    id: 'combos-garrafas',
    title: 'COMBOS E GARRAFAS FECHADAS',
    items: [
      { name: 'Jack Daniels (Sabor)', price: 'Garrafa: R$ 185', detail: 'Combo Red Bull: R$ 270 | Combo Vibe/Bally: R$ 220' },
      { name: 'Jack Daniels (Trad.)', price: 'Garrafa: R$ 175', detail: 'Combo Red Bull: R$ 260 | Combo Vibe/Bally: R$ 200' },
      { name: 'Red Label', price: 'Garrafa: R$ 110', detail: 'Combo Red Bull: R$ 170 | Combo Vibe/Bally: R$ 130' },
      { name: 'Malibu', price: 'Garrafa: R$ 80', detail: 'Combo Red Bull: R$ 150 | Combo Vibe/Bally: R$ 100' },
      { name: 'Passaport', price: 'Garrafa: R$ 75', detail: 'Combo Red Bull: R$ 110 | Combo Vibe/Bally: R$ 80' },
      { name: 'Chanceler', price: 'Garrafa: R$ 30', detail: 'Combo Red Bull: R$ 80 | Combo Vibe/Bally: R$ 55' },
      { name: 'Full London Gin', price: 'Garrafa: R$ 25', detail: 'Combo Red Bull: R$ 70 | Combo Vibe/Bally: R$ 40' },
      { name: 'Mastergold', price: 'Garrafa: R$ 20', detail: 'Combo Red Bull: R$ 70 | Combo Vibe/Bally: R$ 35' },
      { name: 'Askov Vodka', price: 'Garrafa: R$ 20' },
    ]
  },
  {
    id: 'cervejas',
    title: 'CERVEJAS',
    items: [
      { name: '600ml: Heineken/Spaten', price: 'R$ 18,00' },
      { name: '600ml: Original', price: 'R$ 16,00' },
      { name: 'Long Neck: Heineken', price: 'R$ 12,00' },
      { name: 'Long Neck: Corona', price: 'R$ 10,00' },
      { name: 'Lata 473ml: Heineken', price: 'R$ 10,00' },
      { name: 'Lata 473ml: Brahma / Spaten', price: 'R$ 7,00' },
      { name: 'Lata 473ml: Budweiser', price: 'R$ 6,00' },
      { name: 'Lata Pq: Heineken', price: 'R$ 8,00' },
      { name: 'Lata Pq: Spaten/Bud/Original/Brahma/Skol/Amstel', price: 'R$ 5,00' },
      { name: 'Draft Chopp', price: 'R$ 15,00' },
      { name: 'Xeque Mate', price: 'R$ 12,00 / Limão R$ 14,00' },
      { name: 'Skol Beats / GT', price: 'R$ 12,00' },
    ]
  },
  {
    id: 'nao-alcoolicos',
    title: 'NÃO ALCOÓLICOS',
    items: [
      { name: 'Bally 2L', price: 'R$ 15,00' },
      { name: 'Vibe 2L', price: 'R$ 14,00' },
      { name: 'Red Bull', price: 'R$ 14,00' },
      { name: 'Monster', price: 'R$ 8,00' },
      { name: 'Coca-Cola 2L', price: 'R$ 15,00' },
      { name: 'Fanta 2L', price: 'R$ 14,00' },
      { name: 'Latas variadas', price: 'R$ 5,00 a R$ 6,00' },
      { name: 'Água Com gás', price: 'R$ 5,50' },
      { name: 'Água Sem gás', price: 'R$ 4,00' },
    ]
  },
  {
    id: 'tabacaria',
    title: 'TABACARIA E CONVENIÊNCIA',
    items: [
      { name: 'Dunhill / Marlboro', price: 'R$ 15,00' },
      { name: 'Rothmans / LM', price: 'R$ 8,50 - R$ 10,00' },
      { name: 'Essência Ziggy', price: 'R$ 16,00' },
      { name: 'Essência Smyrna', price: 'R$ 18,00' },
      { name: 'Carvão un.', price: 'R$ 1,50' },
      { name: 'Sessão completa Narguilé', price: 'R$ 35,00' },
      { name: 'Sedas', price: 'R$ 4,00 - R$ 5,00' },
      { name: 'Isqueiro Bic', price: 'R$ 5,00' },
      { name: 'Salgadinhos / Trident', price: 'R$ 3,50' },
      { name: 'Gelo', price: 'R$ 5,00' },
    ]
  }
];