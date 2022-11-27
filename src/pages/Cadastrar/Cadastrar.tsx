import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Projeto } from "models/Projeto";


import "../../pages/Cadastrar/style.css";
import { ProjetoService } from "../../services/ProjetoService";


function Cadastrar() {
  const [cadastrado, setCadastrado] = useState<Boolean>(false);
  const [erro, setErro] = useState<Boolean>(false);
  const [logado, setLogado] = useState<Boolean>(false);
  const [senha, setSenha] = useState<string>("");



  useEffect(() => {}, []);

  const delay = (ms: number | undefined) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleClick = async () => {


    await delay(2000);
     setCadastrado(false)

  };

  const onSubmit = (data: Projeto) => {
    console.log(data);

    const response = new ProjetoService()
      .save(data)
      .then((i) => {
        console.log(i);
        reset();
        setCadastrado(true);
        setErro(false);
      })
      .catch(() => setErro(true));

  handleClick()
      

    // alert("Cadastrado com sucesso");
    // window.location.reload()
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Projeto>();

  const logar = ()=> {
  if(senha == "123456"){
    setLogado(true)
  }

  }

  return (


    <>{
!logado &&(
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
              onChange={(e)=> setSenha(e.target.value)}
            />
             <button
            type="submit"
            className=" mb-10 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=> logar()}
          >
            Logar
          </button>
    </form>
  </div>
)

    }
    
    { logado &&(
      <div className="background-blue-light  mx-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nome do Projeto */}
          <div className="mb-6 mt-11">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nome do Projeto
            </label>
            <input
              {...register("nome")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {/* Turma */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Turma
            </label>
            <input
              {...register("turma")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {/* Descricao */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Descricao
            </label>
            <input
              {...register("descricao")}
              type="Text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {/* Participantes */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Participantes
            </label>
            <input
              {...register("participantes")}
              type="Text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className=" mb-6">
            <input
              {...register("turno", { required: true })}
              type="radio"
              value="MATUTINO"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Matutino
            </label>
            <br></br>

            <input
              {...register("turno", { required: true })}
              checked
              id="default-radio-2"
              type="radio"
              value="VESPERTINO"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Vespoertino
            </label>
            <br></br>
            <input
              {...register("turno", { required: true })}
              checked
              id="default-radio-2"
              type="radio"
              value="NOTURNO"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Noturno
            </label>
          </div>
          {erro && (
            <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-red-600 ">
              Erro ao tentar Cadastrar
            </div>
          )}
          {cadastrado && (
            <div className="  mt-6 text-center uppercase p-3 font-semibold text-white  bg-green-600 ">
              Cadastrado com sucesso
            </div>
            
          )}

          <button
            type="submit"
            className=" mb-10 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cadastrar
          </button>
        </form>
      </div>
      )}
    </>
  );
}
export default Cadastrar;
