import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projeto } from "../../models/Projeto";
import { Voto } from "../../models/Voto";
import { ProjetoService } from "../../services/ProjetoService";
import { VotoService } from "../../services/VotoService";
import "../Cadastrar/style.css";

function Votos() {
  const [votos, setVotos] = useState<Voto[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const votosPage = await new VotoService().findAll();
      setVotos(votosPage.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" font-semibold text-white background-blue-light  mx-4">
        {votos?.map((v, i) => (
          <div key={i.toString()}>
            <p >
              Projeto: {v.nome} Votos:{v.votos}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Votos;
