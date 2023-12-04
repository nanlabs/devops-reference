from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Hello World :D"}

@router.get("/healthz")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}
