import "dotenv/config";

import OpenAI from "openai";
import {
  Agent,
  run,
  setDefaultOpenAIClient,
  setOpenAIAPI,
  setTracingDisabled,
  tool
} from "@openai/agents";

const apiKey = process.env.GROQ_API_KEY;
setTracingDisabled(true);

if (!apiKey) {
  throw new Error("Missing GROQ_API_KEY");
}

// Configure Groq as the OpenAI-compatible API provider
const groqClient = new OpenAI({
  apiKey,
  baseURL: "https://api.groq.com/openai/v1",
});

setDefaultOpenAIClient(groqClient);
setOpenAIAPI("chat_completions");

const customerSupportAgent = new Agent({
  name: "Customer support agent",
  instructions:
    "You are a friendly customer support agent. Help customers with order questions, shipping, and returns. Keep replies short, clear, and helpful.",
  model: "openai/gpt-oss-120b",
});

const result = await run(
  customerSupportAgent,
  "Hi, I need help with my order.",
);

console.log(result.finalOutput);
