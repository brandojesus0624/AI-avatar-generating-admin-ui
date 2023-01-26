export interface CreateGeneratingTaskCommand{
  Prompts : CreatePromptInformationCommand[];
  StableDiffusionModelId: string;
}
interface CreatePromptInformationCommand{
  Seed : number;
  PromptId : string;
  NumberOfImages: number;
  NumberOfInferenceSteps: number;
}
