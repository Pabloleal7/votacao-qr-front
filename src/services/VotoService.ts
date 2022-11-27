
import { Projeto } from "../models/Projeto";
import axios from "axios";
import { Voto } from "../models/Voto";

export class VotoService {
  CATEGORIA_API_BASE_URL: string = "http://votacaoapi-env-1.eba-zmdginzg.us-east-1.elasticbeanstalk.com/voto";

  findAll() {
    return axios.get<Voto[]>(this.CATEGORIA_API_BASE_URL+"/all", {
      auth: { username: "pablo", password: "pablo" },
    });
  }


  save(id:String) {
    return axios.post<Voto>(this.CATEGORIA_API_BASE_URL+"/"+id,null, {
      auth: { username: "pablo", password: "pablo" },
    });
  }
}


