# Stage 1: Build development dependencies
FROM python:3.12.0 AS builder-dev

WORKDIR /code

# Copy development requirements files
COPY requirements*.txt ./

# Install development dependencies
RUN pip install --no-cache-dir -r requirements.dev.txt

# Stage 2: Build development dependencies and run the application in development mode
FROM builder-dev AS development

# Copy the application code
COPY ./app ./app

# Create a non-root user to run the application
RUN adduser --disabled-password nonroot

# Switch to the non-root user
USER nonroot

# Command to run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]

# Stage 3: Build production dependencies
FROM python:3.12.0-alpine AS builder-prod

WORKDIR /code

# Copy production requirements file
COPY requirements.txt ./

# Install production dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Stage 4: Final image
FROM python:3.12.0-alpine as production

WORKDIR /code

# Copy production dependencies from builder-prod stage
COPY --from=builder-prod /usr/local /usr/local

# Copy the application code
COPY ./app ./app

# Create a non-root user to run the application
RUN adduser --disabled-password nonroot

# Switch to the non-root user
USER nonroot

# Command to run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
