#!/bin/bash

# ls images/posts/2020/sketches/* > images/posts/2020/images_to_montage.txt

# montage `cat images/posts/2020/images_to_montage.txt` -geometry +0+0 -background none -tile 2x1 images/posts/2020/all.png

bundle exec jekyll serve --watch --force_polling

#jekyll s --watch --force_polling
