import { v4 as uuidv4 } from "uuid";

const products = [
  {
    name: "Harry Potter",
    price: "$59.99",
    imagePath: "src/assets/images/harry.webp",
    description: "The wand that chose Harry Potter, the Boy Who Lived.",
    id: uuidv4(),
  },
  {
    name: "Hermione Granger",
    price: "$29.99",
    imagePath: "src/assets/images/hermione.webp",
    description:
      "The wand of Hermione Granger, founding member of Dumbledore’s Army.",
    id: uuidv4(),
  },
  {
    name: "Ron Weasley",
    price: "$39.99",
    imagePath: "src/assets/images/ron.webp",
    description:
      "The wand of Ron Weasley, founding member of Dumbledore’s Army.",
    id: uuidv4(),
  },
  {
    name: "Draco Malfoy",
    price: "$19.99",
    imagePath: "src/assets/images/malfoy.webp",
    description:
      "Stay loyal to the Slytherin house with this Draco Malfoy wand replica.",
    id: uuidv4(),
  },
];

export default products;
