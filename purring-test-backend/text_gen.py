import google.generativeai as genai
import random
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

text_clue_prompts = [
    "Generate a limerick about {}",
    "Generate a riddle with {} as the answer",
    "Generate a haiku about {}",
    "Generate a poem about {}",
    "Generate a dating profile for {}",
    "Generate a tweet about {}",
]

generation_config = genai.GenerationConfig(temperature=0.9, max_output_tokens=100)

def gen_text_clue(answer):
    orig_prompt = random.choice(text_clue_prompts)
    prompt = orig_prompt.format(answer)
    print("Prompt: ", prompt)
    full_prompt = """
    {}
    Do not include {} in your response. Do not make it obvious that it is about {}.
    """.format(prompt, answer, answer)
    response = model.generate_content(full_prompt, generation_config=generation_config)
    print(response.text)
    return orig_prompt, response.text
