import React from "react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link, useParams } from "react-router-dom";
import { Projeto } from "../../models/Projeto";
import { ProjetoService } from "../../services/ProjetoService";
import { VotoService } from "../../services/VotoService";
import "../Cadastrar/style.css";

function QR() {
  const [projetos, setProjetos] = useState<Projeto[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const projetoPage = await new ProjetoService().findAll();
      setProjetos(projetoPage.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" font-semibold text-white background-blue-light  mx-4">

{projetos?.map((p,i)=>(
 <div className="  mt-6 text-center uppercase p-3 font-semibold text-black text-sm  bg-slate-100 ">
         <h2>{p.nome}</h2>
        
         <Link className="break-words" to={p.id+""}>http://link.com/voto/{p.id} <br /> Ver QRCODE</Link>

 </div>

))}

     
      </div>
    </>
  );
}
export default QR;
