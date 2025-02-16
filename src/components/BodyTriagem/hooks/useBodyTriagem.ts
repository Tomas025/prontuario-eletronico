import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { anamnesisSchema, AnamnesisFormData } from "../schemas/schema"; 
import { api } from "@/services/api";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

export type typeTriagemAnamnesi = {
  bloodPressure: string;
  glucose: string;
  temperature: string;
  respiratoryRate: string;
  bloodType: string;
  weight: string;
  heartRate: string;
  saturation: string;
  height: string;
  antecPathological: boolean;
  necesPsicobio: boolean;
  diabetes: boolean;
  medicationsInUse: boolean;
  useOfProthesis: boolean;
  allergies: boolean;
  allergiesType: string;
  antecPathologicalType: string;
  medicationInUseType: string;
  medicalHypothesis: string;
  previousSurgeries: string;
  signsAndSymptoms: string;
  classificationStatus: string;
}

export function useAnamnesisForm() {
  const queryClient = useQueryClient();
  const {push} = useRouter();

  const [loading, setLoading] = useState(false);
  
  const form = useForm<AnamnesisFormData>({
    resolver: zodResolver(anamnesisSchema),
    defaultValues: {
      serviceId: 1, //arrumar dps, ver a maneira de pegar este valor
      bloodPressure: "",
      glucose: "",
      temperature: "",
      weight: "",
      heartRate: "",
      respiratoryRate: "",
      bloodType: "O+",
      saturation: "",
      height: "",
      antecPathological: "Sim",
      necesPsicobio: "Sim",
      diabetes: "Sim",
      medicationsInUse: "Sim",
      useOfProthesis: "Não",
      allergies: "Não",
      allergiesType: "",
      antecPathologicalType: "",
      medicationInUseType: "",
      previousSurgeries: "",
      signsAndSymptoms: "",
      classificationStatus: "URGENCY",
      medicalHypothesis: ""
    },
  });

  const onSubmit: SubmitHandler<AnamnesisFormData> = async (data) => {
    const session = await getSession();
    console.log("Dados enviados:", data);
    
    try {
      setLoading(true);

      const formattedData = {
        ...data,
        antecPathological: data.antecPathological === "Sim",
        necesPsicobio: data.necesPsicobio === "Sim",
        diabetes: data.diabetes === "Sim",
        medicationsInUse: data.medicationsInUse === "Sim",
        useOfProthesis: data.useOfProthesis === "Sim",
        allergies: data.allergies === "Sim",
      };

      console.log("Dados formatadatos:", formattedData);

      const response = await api.post("MedicalRecord/anamnese", formattedData, {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`
        },
      });
      console.log("Dados enviados com sucesso!", response.data);
      alert("Anamnese cadastrada!");
      form.reset(); // Reseta o formulário após envio
      return response;
    } catch (error: any) {
      console.error("Erro ao enviar os dados:", error);
      alert(error?.response?.data?.message || "Erro ao cadastrar anamnese.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    loading,
  };
}
