
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SITE_CONFIG } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAssistantResponse = async (userMessage: string) => {
  const systemInstruction = `
    Você é um Assistente de IA para o portfólio de ${SITE_CONFIG.name}.
    Cargo: ${SITE_CONFIG.role}.
    Contexto Profissional: Engenheiro de Dados focado em Microsoft Azure e Databricks.
    Formação: Mestrando em IA, MBA em Big Data Analytics.
    Atuação Adicional: Professor Universitário na área de tecnologia.
    Bio: ${SITE_CONFIG.about}.
    
    Regras de Resposta:
    - Seja extremamente profissional, educado e conciso.
    - Responda sempre em Português do Brasil.
    - Foque em tópicos como pipelines de dados, governança, nuvem (Azure), Spark e docência.
    - Se pedirem contato, forneça o email: ${SITE_CONFIG.email}.
    - Se perguntarem sobre projetos, mencione o Lakehouse Escalável e Analytics em Tempo Real.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "Desculpe, não consegui processar essa solicitação agora.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "O assistente de IA está temporariamente offline. Por favor, entre em contato via e-mail!";
  }
};
