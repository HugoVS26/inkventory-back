import { type TattooStructure } from "../types";

const tattoosMock: TattooStructure[] = [
  {
    _id: "6571a7dd81f419ec2f6fc541",
    artist: "Toni Donaire",
    email: "tattoodonaire@gmail.com",
    instagram: "@tdonaire",
    city: "Barcelona",
    direction:
      "https://www.google.com/maps/dir/41.3710726,2.1548484/bhorn+tattoo/@41.3822696,2.1463729,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12a4a2fc5843142f:0xd16d1da1283e5ad9!2m2!1d2.181147!2d41.388018?entry=ttu",
    style: "Neotraditional",
    image: "https://i.ibb.co/dktnBqT/tdonaire-tattoo.webp",
    notes: "",
    isFavorite: false,
  },
  {
    _id: "6564db84aa515e7823b31e57",
    artist: "Nissaco",
    email: "nissaco@gmail.com",
    instagram: "@nissaco",
    city: "Osaka",
    direction:
      "https://www.google.com/maps/place/Osaka,+Prefectura+de+Osaka,+Jap%C3%B3n/@34.6774872,135.3212277,11z/data=!3m1!4b1!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu",
    style: "blackwork",
    image: "https://i.ibb.co/PN9nDyb/nissaco-tattoo.webp",
    notes: "write to him to know the location of his private studio",
    isFavorite: true,
  },
];

export default tattoosMock;
