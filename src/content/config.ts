// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Definição para Notícias
const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    categoria: z.string(),
    // O autor tem valor padrão se não for informado
    autor: z.string().default("Equipe emguapi"), 
    imagem: z.string().optional(),
    destaque: z.boolean().optional(),
    
    // --- NOVO CAMPO ADICIONADO ---
    // Aceita uma lista de textos (ex: ["Paraíso", "Anatel"]) e é opcional
    tags: z.array(z.string()).optional(), 
  }),
});

// 2. Definição para Turismo
const turismo = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    categoria: z.string(),
    imagem: z.string(),
    localizacao: z.string(),
    dificuldade: z.string().optional(),
  }),
});

// 3. Definição para Denúncias / Voz da Comunidade
const denuncias = defineCollection({
  type: 'content',
  schema: z.object({
    autor: z.string(),
    bairro: z.string(),
    data: z.coerce.date(), // Importante para ordenar pela mais recente
    resumo_relato: z.string(), // O texto curto que vai no balão
  }),
});

// Exportação final das coleções
export const collections = { 
    'noticias': noticias,
    'turismo': turismo,
    'denuncias': denuncias
};