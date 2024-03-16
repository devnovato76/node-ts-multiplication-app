
export interface CreateTableUseCase {
   execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
    base: number;
    limit?: number; 
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * DI _ Dependency Injection
     */
  }
  execute({ base, limit = 10 }: CreateTableOptions) {
    const headerMessage = `
===============================
      Tabla del ${base}     
===============================\n
`;
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    outputMessage = headerMessage + outputMessage;
    return outputMessage;
  }
}