# Stable Nginx image use karein
FROM nginx:1.28-alpine

# Nayi config file ko container mein copy karein
COPY default.conf /etc/nginx/conf.d/default.conf

# Files ko copy karein
COPY . /usr/share/nginx/html

# *** YE LINES ADD KAREIN ***
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
# *************************

# Port 80 ko bahar ki dunya ke liye expose karein
EXPOSE 80
