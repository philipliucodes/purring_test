from google import genai
from google.genai import types
import random
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)
client = genai.Client(api_key='GEMINI_API_KEY')

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

    response = client.models.generate_image(
        model='imagen-3.0-generate-002',
        prompt=full_prompt,
        config=types.GenerateImageConfig(
            # negative_prompt= 'people',
            number_of_images = 1,
            include_rai_reason= True,
            output_mime_type= 'image/jpeg'
        )
    )   

    print(response.text)
    return prompt, response.text
