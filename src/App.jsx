import CardProdutos from "./components/CardProdutos";
const Produtos = [
  {
    id: 1,
    Titulo: "Stewed cobbage ",
    molho: "with source",
    valor: 5.9,
    imagens:
      "https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436__340.jpg",
  },
  {
    id: 2,

    Titulo: "Puree soup with",
    molho: "turkey pieces",
    valor: 7.55,
    imagens:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg4mqAtQktt3soYghXZNvjTvmYFWU91VGUkJVdG4O4w&s",
    alt: "foto de um prato de puree soup with turkey pieces",
  },
  {
    id: 3,

    Titulo: "Muffing",
    molho: "bolinhos",
    valor: 10.55,
    imagens:
      "https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436__340.jpg",
    alt: "foto de um bolinhos de moffin",
  },
];

function App() {
  return (
    <div className="App">
      {Produtos.map((prod) => (
        <CardProdutos
          key={prod.id}
          Titulo={prod.Titulo}
          molho={prod.molho}
          valor={prod.valor}
          imagens={prod.imagens}
          alt={prod.alt}
        />
      ))}
    </div>
  );
}

export default App;
