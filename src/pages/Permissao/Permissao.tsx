import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projeto } from "../../models/Projeto";
import { PermissaoService } from "../../services/PermissaoService";
import { ProjetoService } from "../../services/ProjetoService";
import { VotoService } from "../../services/VotoService";
import "../Cadastrar/style.css";

function Permissao() {
  const [logado, setLogado] = useState<Boolean>(false);
  const [senha, setSenha] = useState<string>("");
  const [status, setStatus] = useState<Boolean>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const permissao = await new PermissaoService().find();
      setStatus(permissao.data);
      console.log(permissao.data)
    } catch (error) {
      console.log(error);
    }
  };

  const logar = () => {
    if (senha == "123456") {
      setLogado(true);
    }
  };

  return (
    <>
      {!logado && (
        <div className=" mt-10 background-blue-light  mx-20">
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Senha:
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="submit"
              className=" mb-10 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => logar()}
            >
              Logar
            </button>
          </form>
        </div>
      )}
      {logado && (
               <div className=" mt-10 background-blue-light  mx-20">
                {
                  status ?(<div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-green-600 ">
                  Liberado
                </div>):(<div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-red-600 ">
                  Bloqueado
                </div>)
                }
                
            <button
              type="submit"
              className=" mb-2 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {new PermissaoService().liberar().then(()=> setStatus(true)).catch((e)=> console.log(e)) }}

            >
              Liberar
            </button>

            <button
              type="submit"
              className=" mb-10 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {new PermissaoService().bloquear().then(()=> setStatus(false)) }}
            >
              Bloquear
            </button>
       
        </div>
      )}
    </>
  );
}
export default Permissao;
