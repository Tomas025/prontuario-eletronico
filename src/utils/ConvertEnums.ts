export function ConvertPositionEnums(position: string) {
  switch (position) {
    case 'RECEPCTION':
      return 'Recepcionista';

    case 'MANAGEMENT':
      return 'Gerente';

    case 'DOCTOR':
      return 'Médico(a)';

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

export function ConvertRelationshipEnums(relationship: string) {
  switch (relationship) {
    case 'FATHER':
      return 'Pai';

    case 'MOTHER':
      return 'Mãe';

    case 'SIBLING':
      return 'Irmão(a)';

    case 'SPOUSE':
      return 'Esposo(a)';

    case 'SON':
      return 'Filho(a)';

    case 'OUTHER':
      return 'Outro';

    default:
      return 'Desconhecido';
  }
}

export function isMultidisciplinary(position: string) {
  switch (position) {
    case 'PHYSIOTHERAPIST':
      return true;

    case 'PSYCHOLOGIST':
      return true;

    case 'NUTRITIONIST':
      return true;

    case 'PHARMACEUTICAL':
      return true;

    case 'OCCUPATIONAL_THERAPIST':
      return true;

    case 'BIOCHEMICAL':
      return true;

    case 'X_RAY_TECHNICIAN':
      return true;

    case 'LABORATORY_TECHNICIAN':
      return true;

    default:
      return false;
  }
}
