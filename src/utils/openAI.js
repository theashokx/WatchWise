import { GoogleGenerativeAI } from "@google/generative-ai";
import { openaiKey } from "../utils/constants";

const genAI = new GoogleGenerativeAI(openaiKey);

export default genAI;
