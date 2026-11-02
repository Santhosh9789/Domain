import os
from PIL import Image

src = r"C:\Users\info\.gemini\antigravity\brain\2171ccf2-07f7-465e-b930-4cffd7e87105\.user_uploaded\media_1793617074146_f58d1f0f.jpg"
out_dir = r"f:\Blueidealteck crpto\assets"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src)
img.save(os.path.join(out_dir, "logo.png"))

img_256 = img.resize((256, 256), Image.Resampling.LANCZOS)
img_256.save(os.path.join(out_dir, "logo_256.png"))

img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save(os.path.join(out_dir, "logo_32.png"))

print("Logos saved successfully in 256x256, 32x32, and original PNG!")
