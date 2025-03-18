# 1. Use an official lightweight Python image as a base
FROM python:3.9-slim

# 2. Set a working directory inside the container
WORKDIR /app

# 3. Copy the application files into the container
COPY . /app

# 4. Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# 5. Set environment variables for Flask
ENV FLASK_APP=flaskapp.py
ENV FLASK_RUN_HOST=0.0.0.0

# 6. Expose port 5000 (Flask runs on this port)
EXPOSE 5000

# 7. Command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
