from pytube import YouTube

YouTube('https://youtu.be/tkzY_VwNIek').streams.filter(mime_type="video/mp4").first().download()