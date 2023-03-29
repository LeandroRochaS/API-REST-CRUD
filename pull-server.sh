npm run build
git add .

read message
echo "Mensagem do commit: "
git commit -am "$message"
git push
ssh 35.198.3.183 \
  'git -C /home/Leu/api/ ' \
  'pull origin master && ' \
  'pm2 restart API && sudo systemctl restart nginx'
