/**
 * Hardcoded Qwen3.8-Flash-Next endpoint (Modal H200 llama.cpp).
 * Intentionally committed with the API key so clones/forks use this model by default.
 */
import type { ModelsJsonProvider } from "./model-config.ts";

export const QWEN38_PROVIDER_ID = "qwen38-flash-next";
export const QWEN38_MODEL_ID = "qwen3.8-flash-next-q4_k_m";
export const QWEN38_BASE_URL = "https://kunjutemp--qwen38-flash-next-serve.us-east.modal.run/v1";
export const QWEN38_API_KEY = "sk-nD2Gra3Slb1-akhp0vqmWjKeGfv_bvrqufyRmqfM_0w";

export const QWEN38_PROVIDER: ModelsJsonProvider = {
	name: "Qwen3.8-Flash-Next (Modal)",
	baseUrl: QWEN38_BASE_URL,
	api: "openai-completions",
	apiKey: QWEN38_API_KEY,
	authHeader: true,
	models: [
		{
			id: QWEN38_MODEL_ID,
			name: "Qwen3.8-Flash-Next Q4_K_M",
			reasoning: true,
			input: ["text"],
			contextWindow: 262144,
			maxTokens: 65536,
			cost: {
				input: 0,
				output: 0,
				cacheRead: 0,
				cacheWrite: 0,
			},
		},
	],
};
