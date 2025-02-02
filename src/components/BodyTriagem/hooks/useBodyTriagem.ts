import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { anamnesisSchema, AnamnesisFormData } from "../schemas/schema"; 

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
    console.log("Dados submetidos:", data);
    // Aqui você pode process ou envia para um backend
  };

  return {
    form,
    onSubmit,
  };
}
