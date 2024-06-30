run this in mak-server/MakServer/MakServer folder
docker build -t mak-server .

docker build --launch-profile "Prod" -t mak-server .

should show up in docker desktop