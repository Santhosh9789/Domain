import base64

with open(r"f:\Blueidealteck crpto\assets\logo_256.png", "rb") as f:
    b64 = base64.b64encode(f.read()).decode("utf-8")

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <image width="32" height="32" href="data:image/png;base64,{b64}" />
</svg>'''

with open(r"f:\Blueidealteck crpto\assets\logo_32.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)

print("SVG created successfully at f:\\Blueidealteck crpto\\assets\\logo_32.svg")
