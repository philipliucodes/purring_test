from openai import OpenAI
import random
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI()

prompts = [
    "Draw {} in modern abstract art",
    "Draw {} as an art deco",
    "Draw {} as pop art",
    "Draw {} in stained glass style",
    "Draw {} as a cat with a renaissance painting style",
    "Draw {} in abstract cubism",
    "Draw {} thing as a cact in watercolor",
    "Draw {} thing as a cat in pixel art",
    "Draw {} as graffiti art",
    "Draw {} as a children's book illustration",
    "Draw {} in Art nouveau",
    "Draw {} in mosaic style",
    "Draw {} as a Cat",
    "Draw {} as a Musical",
    "Draw {} as a portrait made of food",
    "Draw a steampunk version of {}",
    "Draw {} as if it's in an anime",
    "Draw {} as if it were a mobile",
    "Draw {} as if they were in Dune",
    "Draw {} as if they were in Blade Runner",
    "Draw {} as if they were in Oppenheimer",
    "Draw {} as if it was a fashion line"
]

def gen_image_clue(answer):
    prompt = random.choice(prompts).format(answer)
    print("Prompt: ", prompt)
    full_prompt = f"{prompt}. Your image should hint at {answer} but not reveal it."

    response = client.images.generate(
        model="dall-e-3",
        prompt=full_prompt,
        size="1024x1024",
        quality="standard",
        response_format="b64_json",
        n=1,
    )
    return prompt, response.data[0].b64_json