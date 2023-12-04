import os
from typing import Any

APP_VERSION: str = "1"

app_configs: dict[str, Any] = {
    "title": "FastAPI Example",
    "root_path": os.getenv("ROOT_PATH", ""),
}
