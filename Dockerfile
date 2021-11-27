FROM python:3.9.9

WORKDIR /python-docker

RUN pip3 install --upgrade pip

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["waitress-serve", "--call" , "src.app:create_app"]
