from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
def root():
    return {"message": "Hello world"}


@app.get("/api/hello/{name}")
def hello(name: str):
    return {"message": "Hello " + name}
