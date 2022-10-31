import { useState } from "react";
import CardProdutos from "./components/CardProdutos";

function App() {
  return (
    <div className="App">
      <CardProdutos
        produto="Stewed cobbage "
        molho="with source"
        valor={"5,90"}
        imagens={
          "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74649.jpg?size=626&ext=jpg&ga=GA1.2.1383280831.1667171683"
        }
        alt={"foto de um prato de stewed cobbage with source"}
      />

      <CardProdutos
        produto="Puree soup with"
        molho="turkey pieces"
        valor={"7.55"}
        imagens={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg4mqAtQktt3soYghXZNvjTvmYFWU91VGUkJVdG4O4w&s"
        }
        alt={"foto de um prato de puree soup with turkey pieces"}
      />
    </div>
  );
}

export default App;
