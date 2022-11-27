import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { Projeto } from "../../models/Projeto";
import { ProjetoService } from "../../services/ProjetoService";
import { VotoService } from "../../services/VotoService";
import "../Cadastrar/style.css";

function QRProjeto() {
  const { projeto } = useParams();
  const [projetoModel, setProjetoModel] = useState<Projeto>();


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const projetoPage = await new ProjetoService().findByID(projeto || "");
      setProjetoModel(projetoPage.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className=" font-semibold text-white background-blue-light  mx-4">
      <h1 className="mt-6 text-white uppercase font-bold">
              {projetoModel?.nome}
            </h1>
            <h1 className="mt-1  uppercase ">
              {projetoModel?.turma + "  -  " + projetoModel?.turno}
            </h1>
            <h2 className="mt-6  uppercase  ">
              {"PARTICIPANTES: " + projetoModel?.participantes}
            </h2>
            <h1 className="mt-20 text-center">PARA VOTAR APONTE A CAMERA</h1>
            <div className="p-10 bg-white">
            <QRCode className="mt-10 m-auto " value={"http://link.com/voto/"+projetoModel?.id} />

            </div>
       </div>

    </>
  );
}
export default QRProjeto;
