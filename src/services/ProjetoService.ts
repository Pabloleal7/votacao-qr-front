import { Projeto } from "./../models/Projeto";
import axios from "axios";

export class ProjetoService {
  CATEGORIA_API_BASE_URL: string = "http://votacaoapi-env-1.eba-zmdginzg.us-east-1.elasticbeanstalk.com/projeto";

  findAll() {
    return axios.get<Projeto[]>(this.CATEGORIA_API_BASE_URL, {
      auth: { username: "pablo", password: "pablo" },
    });
  }
  findByID(id:String) {
    return axios.get<Projeto>(this.CATEGORIA_API_BASE_URL+"/"+id, {
      auth: { username: "pablo", password: "pablo" },
    });
  }


  save(data:Projeto) {
    return axios.post<Projeto>(this.CATEGORIA_API_BASE_URL,data, {
      auth: { username: "pablo", password: "pablo" },
    });
  }
}


