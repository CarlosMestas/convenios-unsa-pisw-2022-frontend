export enum ENUMConvocationTypeAcronym{
  PIVE="PIVE",
  PIVDO="PIVDO",
  COEVAN = "COEVAN",
  COEVIENEN = "COEVIENEN",
  CODVAN = "CODVAN",
  CODVIENEN = "CODVIENEN"
}



export enum ENUMPostulationCoevanStatus{
  SIN_ENVIAR = 1,
  ENVIADO = 2,
  EN_REVISION = 3,
  ACEPTADO = 4,
  OBSERVADO = 5,
  GANADO = 6,
  EN_DOCUMENTACION = 7,
  EN_SEGUIMIENTO = 8,
  EN_SEGUIMIENTO_OBSERVADO = 9,
  FINALIZADO = 10,
  FINALIZADO_OBSERVADO = 11,
  ANULADO_POSTULANTE = 12,//el postulante decide anular su postulación
  ANULADO_ADMIN = 13,
  NO_GANADOR = 14
}


export enum ENUMConvocationStatus{
  PROXIMA = "1",
  EN_PROCESO = "2",
  EN_EVALUACION = "3",
  CANCELADA = "4",
  RE_ABIERTA = "5",
  EN_SEGUIMIENTO = "6",
  EN_FINALIZACION = "7",
  CONCLUIDA = "8"
}
