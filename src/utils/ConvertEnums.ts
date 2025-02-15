export function ConvertPositionEnums(position: string) {
  switch (position) {
    case 'RECEPCTION':
      return 'Recepcionista';

    case 'MANAGEMENT':
      return 'Gerente';

    case 'DOCTOR':
      return 'Doutor(a)';

    case 'NURSE':
      return 'Enfermeiro(a)';

    case 'NURSING_TECHNICIAN':
      return 'Tecnico de Enfermagem';

    case 'PHYSIOTHERAPIST':
      return 'Fisioterapeuta';

    case 'PSYCHOLOGIST':
      return 'Psicologo';

    case 'NUTRITIONIST':
      return 'Nutricionista';

    case 'PHARMACEUTICAL':
      return 'Farmaceutico(a)';

    case 'OCCUPATIONAL_THERAPIST':
      return 'Terapeuta Ocupacional';

    case 'BIOCHEMICAL':
      return 'Bioquimico';

    case 'X_RAY_TECHNICIAN':
      return 'Tecnico de Raio-X';

    case 'LABORATORY_TECHNICIAN':
      return 'Tecnico de Laboratorio';

    default:
      return 'Desconhecido';
  }
}
