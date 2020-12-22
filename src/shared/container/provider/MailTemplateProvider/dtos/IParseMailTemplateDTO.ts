interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  // Recebe qualquer tipo de objeto
  variables: ITemplateVariables;
}
