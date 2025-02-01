import os
import random
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

def configure_gemini():
    api_key = os.getenv("GEMINI_API_KEY")
    genai.configure(api_key=api_key)

categories = [
    "Thing",
    "Place",
    "Musical",
    "Flag",
    "Country",
    "Food",
    "Movie/Show",
    "Book",
    "Play",
    "Animal",
    "Historical Figure",
    "Scientific Discovery",
    "Painting",
    "Ancient Civilization",
    "Chemical Element (or Compound)",
    "Video Game",
    "Architectural Style",
    "Mythological Creature"
]

# returns a tuple in the form of (category, word)
def generate_answer():
    global categories

    category = random.choice(categories)
    prompt = f"Give me a single random word from the category '{category}'. Just return the word, nothing else."
    
    configure_gemini()
    model = genai.GenerativeModel("gemini-pro")

    try:
        response = model.generate_content(prompt)
        return (category, response.text.strip())
    except Exception as e:
        print(f"Error generating word: {e}")
        return None
