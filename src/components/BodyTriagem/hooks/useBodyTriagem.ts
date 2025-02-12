import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { anamnesisSchema, AnamnesisFormData } from "../schemas/schema"; 
import { api } from "@/services/api";

export function useAnamnesisForm() {
  const form = useForm<AnamnesisFormData>({
    resolver: zodResolver(anamnesisSchema),
    defaultValues: {
      pressao: "",
      glicose: "",
      temperatura: "",
      peso: "",
      freqCardiaca: "",
      freqResp: "",
      tipoSang: "O+",
      saturacao: "",
      altura: "",
      antPato: "Sim",
      necesPsicobio: "Sim",
      diabetes: "Sim",
      medicUso: "Sim",
      protese: "Não",
      temAlergia: "Não",
      alergias: "",
      antecedentes: "",
      medicamentos: "",
      cirurgias: "",
      sintomas: "",
    },
  });

  const onSubmit: SubmitHandler<AnamnesisFormData> = async (data) => {
    try {
      const response = await api.post("/MedicalRecord/anamnese", data);
      console.log("Dados enviados com sucesso!", response.data);
      alert("Anamnese cadastrada!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao cadastrar anamnese.");
    }
  };

  return {
    form,
    onSubmit,
  };
}
