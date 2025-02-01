text_clue_prompts = [
    "Generate a limerick about {}",
    "Generate a riddle with {} as the answer",
    "Generate a haiku about {}",
    "Generate a poem about {}",
    "Generate a dating profile for {}",
    "Generate a tweet about {}",
]
def gen_text_clue(answer):
    prompt = random.choice(text_clue_prompts).format(answer)
    
    