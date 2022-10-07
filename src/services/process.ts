import api from "~/services/api";

/**
 * Busca Processos.
 */
export const fetchProcess = async ({
  processNumber,
}: {
  processNumber: string;
}) => api.get(`/processos/${processNumber}`);
