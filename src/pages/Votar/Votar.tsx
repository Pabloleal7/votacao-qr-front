import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projeto } from "../../models/Projeto";
import { ProjetoService } from "../../services/ProjetoService";
import { VotoService } from "../../services/VotoService";
import "../Cadastrar/style.css";

function Votar() {
  const { projeto } = useParams();
  const [projetoModel, setProjetoModel] = useState<Projeto>();
  const [projetos, setProjetos] = useState<String[]>(() => {
    const storage = localStorage.getItem("projetos");
    if (storage) {
      return JSON.parse(storage);
    } else {
      return [];
    }
  });
  const [votou, setVotou] = useState<Boolean>(false);
  const [erro, setErro] = useState<Boolean>(false);
  const [bloqueado, setBloqueado] = useState<Boolean>(false);

  useEffect(() => {
    fetchData();
    votar();
  }, []);

  const fetchData = async () => {
    try {
      const projetoPage = await new ProjetoService().findByID(projeto || "");
      setProjetoModel(projetoPage.data);
    } catch (error) {
      console.log(error);
    }
  };

  const votar = () => {
    const votado = projetos.filter((i) => i == projeto).length;
    if (votado == 0) {
      if (projeto) {
        console.log(projeto);

        const response = new VotoService()
          .save(projeto.toString())
          .then((i) => {
            if (i.data.id != "bloqueado") {
              localStorage.setItem(
                "projetos",
                JSON.stringify([...projetos, projeto])
              );
              console.log(i);
            } else {
              setBloqueado(true);
              console.log(i);

            }
          })
          .catch((e) => {
            setErro(true);
            console.log(e);
          });
      }
    } else {
      setVotou(true);
    }
  };

  return (
    <>
      <div className=" font-semibold text-white background-blue-light  mx-4">
        {projetoModel && (
          <>
            {" "}
            <h1 className="mt-6 text-white uppercase font-bold">
              {projetoModel?.nome}
            </h1>
            <h1 className="mt-1  uppercase ">
              {projetoModel?.turma + "  -  " + projetoModel.turno}
            </h1>
            <h2 className="mt-6  uppercase  ">
              {"PARTICIPANTES: " + projetoModel.participantes}
            </h2>
          </>
        )}
        {!votou && !erro && !bloqueado && (
          <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-green-600 ">
            voto confirmado com sucesso
          </div>
        )}
        {erro && !projetoModel && !bloqueado && (
          <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-red-600 ">
            Projeto não existente, nos contate ou procure o qrcode correto
          </div>
        )}
         {bloqueado && (
          <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-red-600 ">
            Votação Encerrada Ou Bloqueada
          </div>
        )}
      </div>
      {votou && !erro && !bloqueado && (
        <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-yellow-600 ">
          voce ja votou neste projeto
        </div>
      )}
      {projetoModel?.descricao && (
        <>
          {" "}
          <h1 className=" px-3 mt-6 text-white  font-bold">
            {"Descrição: " + projetoModel?.descricao}
          </h1>
        </>
      )}
    </>
  );
}
export default Votar;
